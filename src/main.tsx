import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import "./i18n";

import { routeTree } from "./routeTree.gen";
import { ThemeProvider } from "./components/provider/theme-provider";
import { LanguageProvider } from "./context/language-context";
import { AuthProvider, useAuth } from "./context/auth-context";

const router = createRouter({
  routeTree,
  context: {
    auth: typeof useAuth
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  const auth = useAuth();

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
