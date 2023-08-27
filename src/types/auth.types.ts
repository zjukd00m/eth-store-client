export interface AuthUser {
  wallet: string;
  email?: string;
  isConfirmed?: boolean;
}

export interface AuthState {
  data: {
    user: AuthUser;
  };
  chainId: string;
  isAuthenticated: boolean;
  errors?: Record<string, string>;
}
