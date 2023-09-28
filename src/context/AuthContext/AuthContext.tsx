import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";
import { initialAuthState } from "./auth.constants";
import authReducer from "@/reducers/auth/auth.reducer";
import { AuthState } from "@/types/auth.types";
import { RESET_STATE, SET_USER } from "@/actions/auth.actions";
import { clearUserSession, registerUserToDb } from "@/services/api/auth.service";
import useStorageHook from "@/hooks/StorageHoook";

const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<any>,
  locked: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}>({
  state: initialAuthState,
  dispatch: () => null,
  locked: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export default function AuthContextProvider({ children }: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const [locked, setLocked] = useState(false);
  const { 
    get: getStorageItem, 
    store: setStorageItem, 
    clear: clearStorageItems 
  } = useStorageHook();

  // Lock the context functionality when metamask is not installed
  // useEffect(() => {
  //   if (typeof window.ethereum === "undefined") setLocked(true);
  //   else setLocked(false); 
  // }, []);

  // Authenticate the user on active connection from the wallet to the app
  useEffect(() => {
    if (locked) return;
    (async () => {
        const account = await window.ethereum.request({  method: "eth_accounts" });

        if (account?.length && !state.isAuthenticated)
          dispatch({
            type: SET_USER,
            payload: {
              wallet: account[0]
            }
          });
    })();
  }, [locked]);


  // Listen for changes in the account (on change), when there's no account
  // then reset the authentication state
  useEffect(() => {
      if (locked) return;
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
          if (!accounts?.length)
            dispatch({
              type: RESET_STATE,
            });
      });
  }, [locked]);

    async function login() {

      if (locked) return;
      // Request the wallet sign in with metamask
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

      // If more than one wallet is selected, the first one will be used by default
      const wallet = accounts[0];

      const authContextPayload = {
        wallet,
        email: null,
        confirmed: false,
        registered: false,
      }

      // Generate a message to be signed by the user
      const message = "Sign the message to authenticate into the app's backend server";

      // Sign the message using the user's wallet
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [message, wallet],
      });

      const registered = await registerUserToDb({
        wallet,
        message,
        signature,
      })
        .then((data) => {
          if (data) {
            const { accessToken } = data;
            return setStorageItem("token", { token: accessToken }, true);
          } else {
            console.log("Error while logging...");
            console.log(data);
            return false;
          }
        });

      authContextPayload.registered = registered

      dispatch({
        type: SET_USER,
        payload: authContextPayload,
      });
    }

    async function logout() {
      const tokenData = getStorageItem("key");

      if (!tokenData) {
        throw new Error("There is no user token");
      }

      await clearUserSession(tokenData.token)
        .then((data) => {
          console.log("LOGOUT RESPONSE");
          console.log(data);
        });

      clearStorageItems();
    }

  return <AuthContext.Provider value={{state, dispatch, locked, login, logout}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("==> Install Metamask First!");
  }
  return context;
}