import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/404')({
  component: NotFound,
})

export function NotFound() {
  return <div>Not Found</div>
}
