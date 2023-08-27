import { CLEAR_ERROR, RESET_STATE, SET_IS_AUTHENTICATED, SET_USER } from "@/actions/auth.actions";
import { SET_ERROR } from "@/actions/collectible.actions";
import { initialAuthState } from "@/context/AuthContext/auth.constants";
import { AuthState } from "@/types/auth.types";

export default function authReducer(state: AuthState, action: any): AuthState {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        data: {
            ...state.data,
            user: {
                wallet: action.payload.wallet,
            },
        },
      };
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      }
    case SET_ERROR:
        return {
            ...state,
            errors: {
                ...state.errors,
                ...action.payload.error
            }
        }
    case CLEAR_ERROR:
        return {
            ...state,
            errors: {
                ...state.errors,
                [action.payload.keyError]: null,
            }
        }
    case RESET_STATE:
      return initialAuthState;
    default:
      return state;
  }
}