import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/chapter-1/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='p-2'>Hello "/chapter-1/"!</div>
}
