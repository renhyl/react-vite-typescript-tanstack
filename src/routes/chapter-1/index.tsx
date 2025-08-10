import { createFileRoute } from '@tanstack/react-router'
import towerLarge from '@/assets/img/chapter-1/tower-large.webp'
import towerMedium from '@/assets/img/chapter-1/tower-medium.webp'
import towerSmall from '@/assets/img/chapter-1/tower-small.webp'
import { DecorativeCorner } from '@/components/DecorativeCorner'

export const Route = createFileRoute('/chapter-1/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-2'>
      <Chapter1 />
    </div>
  )
}

// Helper component for the Celtic-inspired decorative divider
const CelticDivider: React.FC = () => (
  <div className='flex justify-center items-center my-8' aria-hidden='true'>
    <svg
      width='80%'
      height='20'
      viewBox='0 0 400 20'
      xmlns='http://www.w3.org/2000/svg'
      className='stroke-current text-slate-500'
    >
      <title>Decorative divider</title>
      <path d='M0 10 Q 50 20, 100 10 T 200 10 T 300 10 T 400 10' strokeWidth='2' fill='none' />
      <path d='M0 10 Q 50 0, 100 10 T 200 10 T 300 10 T 400 10' strokeWidth='2' fill='none' />
    </svg>
  </div>
)

// Helper component for the gothic-style bullet points
const GothicListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className='flex items-start mb-3'>
    <span
      className='text-xl text-teal-300 mr-4 -mt-0.5 transform rotate-45 font-serif'
      aria-hidden='true'
    >
      +
    </span>
    <span>{children}</span>
  </li>
)

const Chapter1: React.FC = () => {
  return (
    <div className='text-slate-300 font-serif p-8 md:p-16 min-h-screen'>
      <div className='max-w-4xl mx-auto border-4 border-slate-700 shadow-2xl shadow-black p-8 md:p-12 bg-charcoal-700  bg-red relative'>
        {/* Decorative Corner Elements */}
        <DecorativeCorner className='top-2 left-2 border-l-2 border-t-2' />
        <DecorativeCorner className='top-2 right-2 border-r-2 border-t-2' />
        <DecorativeCorner className='bottom-2 left-2 border-l-2 border-b-2' />
        <DecorativeCorner className='bottom-2 right-2 border-r-2 border-b-2' />

        <header className='flex flex-col gap-4 text-center mb-10'>
          <h1 className='text-2xl md:text-4xl font-bold text-teal-200 mb-2 tracking-wider'>
            Chapter 1: What is React & Why Use It?
          </h1>
          <img
            src={towerMedium} // Fallback for browsers that don't support srcset
            srcSet={`${towerSmall} 480w, ${towerMedium} 800w, ${towerLarge} 1200w`}
            sizes='(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px'
            alt='Chapter 1'
            loading='lazy' // Enable lazy loading
            className='w-4/6 h-auto border-12 border-stone-800 mx-auto'
          />
        </header>

        <main>
          <section className='mb-8'>
            <h2 className='text-3xl font-semibold text-slate-100 border-b-2 border-slate-700 pb-2 mb-4'>
              Core Definition
            </h2>
            <p className='text-lg leading-relaxed'>
              React is a JavaScript library for building user interfaces through reusable components
              and declarative programming, where you describe what the UI should look like rather
              than how to manipulate it.
            </p>
          </section>

          <CelticDivider />

          <section className='mb-8'>
            <h2 className='text-3xl font-semibold text-slate-100 border-b-2 border-slate-700 pb-2 mb-4'>
              Key Characteristics
            </h2>
            <ul className='list-none pl-0'>
              <GothicListItem>
                <strong>Component-based architecture:</strong> UI broken into independent, reusable
                pieces
              </GothicListItem>
              <GothicListItem>
                <strong>Virtual DOM:</strong> Efficient rendering through in-memory representation
                of real DOM
              </GothicListItem>
              <GothicListItem>
                <strong>Declarative paradigm:</strong> Describe desired state, React handles DOM
                updates
              </GothicListItem>
              <GothicListItem>
                <strong>Unidirectional data flow:</strong> Data flows down through props, events
                bubble up
              </GothicListItem>
              <GothicListItem>
                <strong>JSX syntax:</strong> JavaScript extension allowing HTML-like syntax in
                components
              </GothicListItem>
              <GothicListItem>
                <strong>Rich ecosystem:</strong> Extensive tooling, libraries, and community support
              </GothicListItem>
            </ul>
          </section>

          <CelticDivider />

          <section className='mb-8'>
            <h2 className='text-3xl font-semibold text-slate-100 border-b-2 border-slate-700 pb-2 mb-4'>
              When to Use
            </h2>
            <div className='border border-slate-700 p-4 hover:bg-slate-700/50 hover:border-teal-300 transition-all duration-300'>
              <h3 className='font-bold text-xl text-teal-300'>Use React when...</h3>
              <p className='mt-2'>
                Building interactive web applications with dynamic content, complex state management
                needs, or when component reusability is crucial
              </p>
            </div>
          </section>

          <CelticDivider />

          <section className='mb-8'>
            <h2 className='text-3xl font-semibold text-slate-100 border-b-2 border-slate-700 pb-2 mb-4'>
              Examples
            </h2>
            <ul className='list-decimal list-inside text-lg space-y-3'>
              <li>
                <strong>E-commerce platform:</strong> Product catalogs with filtering, shopping
                carts, and user dashboards benefit from component reusability and state management
              </li>
              <li>
                <strong>Social media feed:</strong> Dynamic content updates, real-time interactions,
                and complex UI states are handled efficiently through React's virtual DOM
              </li>
              <li>
                <strong>Data visualization dashboard:</strong> Interactive charts and widgets that
                need frequent updates leverage React's declarative approach and component isolation
              </li>
            </ul>
          </section>

          <CelticDivider />

          <section className='bg-slate-900/70 border-2 border-slate-600 p-6 text-center shadow-lg'>
            <h2 className='text-2xl font-semibold text-slate-100 mb-2'>Memory Aid</h2>
            <p className='text-xl text-teal-200 leading-relaxed italic'>
              Choose React when you need interactive UIs with reusable components and complex state
              management.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
