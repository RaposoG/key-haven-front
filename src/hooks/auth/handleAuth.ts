import { useAuth } from "@/context/auth-context";
import { LoginData, RegisterData } from "@/core/interfaces/auth.interface";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const handleAuth = () => {
  const { login, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (data: LoginData) => {
    setLoading(true);
    setError(null);

    try {
      await login(data);

      navigate({ to: "/app/dashboard" });
    } catch (err) {
      setError("Erro ao fazer login.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setLoading(true);

    logout();

    navigate({ to: "/" });

    setLoading(false);
  };

  const handleRegister = async (data: RegisterData) => {
    setLoading(true);
    setError(null);

    try {
      //TODO: Implementar a lógica de registro com requisição HTTP
      console.log("Tentando fazer registro...", data);

      setTimeout(() => {
        console.log("Registro bem-sucedido", data);
        navigate({ to: "/" });
      }, 1000);

      setLoading(false);
    } catch (err) {
      setError("Erro ao fazer registro.");
    }
  };

  return { handleLogin, handleLogout, handleRegister, loading, error };
};
