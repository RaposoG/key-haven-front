import { LoginData } from "@/core/interfaces/auth.interface";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (data: LoginData) => void;
  logout: () => void;
}
