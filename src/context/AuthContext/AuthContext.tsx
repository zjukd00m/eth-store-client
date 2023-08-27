import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";
import { initialAuthState } from "./auth.constants";
import authReducer from "@/reducers/auth/auth.reducer";
import { AuthState } from "@/types/auth.types";
import { RESET_STATE, SET_USER } from "@/actions/auth.actions";

const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<any>,
  locked: boolean;
  login: () => Promise<void>;
}>({
  state: initialAuthState,
  dispatch: () => null,
  locked: false,
  login: () => Promise.resolve(),
});

export default function AuthContextProvider({ children }: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const [locked, setLocked] = useState(false);

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
              payload: {
                wallet: accounts[0],
              }
            });
      });
  }, [locked]);

    async function login() {
      console.log("----")
      console.log("heree")
      console.log({ locked })
      if (locked) return;
      try {
        // Request the wallet sign in with metamask
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        dispatch({
          type: SET_USER,
          payload: {
            wallet: accounts[0],
          },
        });
      } catch (error: any) {
        if (error.code === 4001) {
            console.log("Connect to metamask");
        } else {
            console.error(error.message);
        }
      }
    }

  return <AuthContext.Provider value={{state, dispatch, locked, login}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("==> Install Metamask First!");
  }
  return context;
}