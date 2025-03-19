import * as React from "react";
import { Outlet,  createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<{
  auth: {
    isAuthenticated: boolean;
  };
}>()({
  component: RootComponent,
});
function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
