import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * TODO: Tipagem não está pegando mas funciona.
 * @see https://tanstack.com/router/v1/docs/framework/react/guide/authenticated-routes#authentication-using-react-contexthooks
 * @see main.tsx
 */
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
