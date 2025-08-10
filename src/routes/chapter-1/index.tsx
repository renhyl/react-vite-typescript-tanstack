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
      className='text-xl text-teal-300 mr-4 mt-1 transform rotate-45 font-serif'
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
          <p className='text-lg text-slate-400'>The Declarative Spirit vs. The Imperative Hand</p>
        </header>

        <main>
          <section className='mb-8'>
            <h2 className='text-3xl font-semibold text-slate-100 border-b-2 border-slate-700 pb-2 mb-4'>
              Core Difference
            </h2>
            <p className='text-lg leading-relaxed'>
              React allows developers to declaratively describe their UI and its state; when the
              state changes, React intelligently updates the actual DOM. In contrast, traditional
              JavaScript requires manually selecting and manipulating each DOM element step-by-step
              (imperatively) to achieve the same result.
            </p>
          </section>

          <CelticDivider />

          <section className='mb-8'>
            <h2 className='text-3xl font-semibold text-slate-100 border-b-2 border-slate-700 pb-2 mb-4'>
              Key Characteristics
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-bold text-teal-300 mb-3'>React (The Architect)</h3>
                <ul className='list-none pl-0'>
                  <GothicListItem>
                    <strong>Virtual DOM:</strong> A lightweight copy of the DOM in memory. React
                    updates this first, then efficiently applies only the necessary changes to the
                    real DOM, boosting performance.
                  </GothicListItem>
                  <GothicListItem>
                    <strong>Component-Based:</strong> UIs are built from isolated, reusable pieces
                    of code called components, making complex applications manageable.
                  </GothicListItem>
                  <GothicListItem>
                    <strong>Declarative:</strong> You "declare" what the UI should look like for a
                    given state, and React handles the "how" of updating it.
                  </GothicListItem>
                </ul>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-red-300 mb-3'>
                  Traditional JS (The Sculptor)
                </h3>
                <ul className='list-none pl-0'>
                  <GothicListItem>
                    <strong>Direct DOM Manipulation:</strong> Code directly accesses and modifies
                    HTML elements, which can be slow and error-prone for complex applications.
                  </GothicListItem>
                  <GothicListItem>
                    <strong>Imperative:</strong> You write explicit, step-by-step instructions to
                    change the UI (e.g., "find this button, disable it, change its text").
                  </GothicListItem>
                  <GothicListItem>
                    <strong>Less Abstraction:</strong> You work closer to the browser's APIs, giving
                    you fine-grained control but requiring more boilerplate code.
                  </GothicListItem>
                </ul>
              </div>
            </div>
          </section>

          <CelticDivider />

          <section className='mb-8'>
            <h2 className='text-3xl font-semibold text-slate-100 border-b-2 border-slate-700 pb-2 mb-4'>
              When to Use
            </h2>
            <div className='grid md:grid-cols-2 gap-8 mt-4'>
              <div className='border border-slate-700 p-4 hover:bg-slate-700/50 hover:border-teal-300 transition-all duration-300'>
                <h3 className='font-bold text-xl text-teal-300'>Use React when...</h3>
                <p className='mt-2'>
                  Building complex Single-Page Applications (SPAs) with dynamic data and significant
                  user interaction, where managing state efficiently is critical.
                </p>
              </div>
              <div className='border border-slate-700 p-4 hover:bg-slate-700/50 hover:border-red-300 transition-all duration-300'>
                <h3 className='font-bold text-xl text-red-300'>Use Traditional JS when...</h3>
                <p className='mt-2'>
                  Creating simple, static websites or adding small, isolated bits of interactivity
                  to a multi-page site without the overhead of a framework.
                </p>
              </div>
            </div>
          </section>

          <CelticDivider />

          <section className='mb-8'>
            <h2 className='text-3xl font-semibold text-slate-100 border-b-2 border-slate-700 pb-2 mb-4'>
              Examples
            </h2>
            <ul className='list-decimal list-inside text-lg space-y-3'>
              <li>
                <strong>Updating a Username:</strong> With React, you change the `user` state, and
                the name updates everywhere. Traditionally, you'd select the header element, the
                profile card element, and the welcome message element to update each one manually.
              </li>
              <li>
                <strong>Real-time Notifications:</strong> In React, a new notification updates the
                state, and the UI automatically re-renders a new notification component.
                Traditionally, you'd create a new HTML element, populate it, and append it to the
                notification list by hand.
              </li>
              <li>
                <strong>Dynamic Forms:</strong> A React form's button can be disabled by linking its
                `disabled` attribute to state (`isDisabled`). Traditionally, you'd write a function
                to find the button and set its `disabled` property to `true`.
              </li>
            </ul>
          </section>

          <CelticDivider />

          <section className='bg-slate-900/70 border-2 border-slate-600 p-6 text-center shadow-lg'>
            <h2 className='text-2xl font-semibold text-slate-100 mb-2'>Memory Aid</h2>
            <p className='text-xl text-teal-200 leading-relaxed italic'>
              "Use React to <span className='font-bold'>describe</span> the destination; use
              traditional JS to <span className='font-bold'>write</span> the turn-by-turn
              directions."
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
