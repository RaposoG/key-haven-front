import { LoginData } from "@/core/interfaces/auth.interface";
import { AuthToken } from "./auth-token.interface";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (data: LoginData) => void;
  logout: () => void;
  token: AuthToken | null;
}
