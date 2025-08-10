import { createFileRoute } from '@tanstack/react-router'

const Index = () => {
  const hello = 'Welcome Home!'

  return (
    <div className='p-2'>
      <h3>{hello}</h3>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})
