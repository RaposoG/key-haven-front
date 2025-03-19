import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType } from "./interfaces/auth-context.interface";
import { AuthToken } from "./interfaces/auth-token.interface";
import { LoginData } from "@/core/interfaces/auth.interface";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<AuthToken | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(JSON.parse(storedToken)); 
    }
  }, []);

  //TODO: Implementar a lógica de login com requisição HTTP
  const login = async (data: LoginData) => {
    try {
      console.log("Tentando fazer login...", data);

      const mockResponse = {
        token: "mock-token-123",
        expiresIn: 3600,
        user: {
          id: "idididid",
          name: "John Doe",
        },
      };

      setTimeout(() => {
        localStorage.setItem("token", JSON.stringify(mockResponse));
        setIsAuthenticated(true);
        setToken(mockResponse);

        console.log("Login bem-sucedido", mockResponse);
      }, 1000); 
    } catch (error) {
      console.error("Erro ao tentar fazer login", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
