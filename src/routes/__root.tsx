import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import "../index.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>root dentro de main 
        
      </div>
      <Outlet />
    </React.Fragment>
  );
}
