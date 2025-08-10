import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/chapter-1/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/chapter-1/"!</div>
}
