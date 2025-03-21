import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import "./i18n";
import "reflect-metadata";

import { routeTree } from "./routeTree.gen";
import { ThemeProvider } from "./components/provider/theme-provider";
import { LanguageProvider } from "./context/language-context";
import { AuthProvider, useAuth } from "./context/auth-context";

/**
 * Criação do roteador com a árvore de rotas e o contexto
 */
const router = createRouter({
  routeTree,
  context: {
    auth: {
      isAuthenticated: false,
    }
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

/**
 * Componente que encapsula a aplicação e provê o contexto
 */
function InnerApp() {
  const auth = {
    isAuthenticated: useAuth().isAuthenticated
  }

  return <RouterProvider router={router} context={{ auth }} />;
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <LanguageProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <InnerApp />
          </ThemeProvider>
        </LanguageProvider>
      </AuthProvider>
    </StrictMode>
  );
}
