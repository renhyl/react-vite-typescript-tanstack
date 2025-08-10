import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { NotFound } from '@/routes/404'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='p-2 flex gap-4'>
        <Link to='/' className='[&.active]:underline'>
          Home
        </Link>
        <Link to='/about' className='[&.active]:underline'>
          About
        </Link>
        <Link to='/chapter-1' className='[&.active]:underline'>
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
