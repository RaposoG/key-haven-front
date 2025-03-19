import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/storage")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/app/storage"!</div>;
}
