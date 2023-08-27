import { AuthState } from "@/types/auth.types";

export const initialAuthState: AuthState = {
  data: {
    user: {
      wallet: "",
      email: "",
      isConfirmed: false,
    },
  },
  chainId: "",
  isAuthenticated: false,
};
