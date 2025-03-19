import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/authentication')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/authentication"!</div>
}
