import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { NotFound } from '@/routes/404'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='p-2 flex gap-4'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>
        <Link to='/about' className='[&.active]:font-bold'>
          About
        </Link>
        <Link to='/chapter-1' className='[&.active]:font-bold'>
          Chapter 1
        </Link>
      </div>
      <hr />
      <div className='p-4'>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <NotFound />,
})
