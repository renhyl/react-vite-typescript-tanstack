import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  const hello = 'Welcome Home!'

  return (
    <div className='p-2'>
      <h3>{hello}</h3>
    </div>
  )
}
