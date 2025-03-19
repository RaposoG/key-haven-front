import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/app/dashboard")({
  component: RouteComponent,
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/",
        search: { redirect: location.href },
      });
    }
  },
});

function RouteComponent() {
  return <div>Hello "/app/dashboard"!</div>;
}
