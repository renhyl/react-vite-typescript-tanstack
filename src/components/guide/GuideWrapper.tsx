import { DecorativeCorner } from '@/components/DecorativeCorner'

export const GuideWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className='text-slate-300 font-serif p-8 md:p-16 min-h-screen'>
    <div className='max-w-4xl mx-auto border-4 border-slate-700 shadow-2xl shadow-black p-8 md:p-12 bg-charcoal-700 relative'>
      <DecorativeCorner className='top-2 left-2 border-l-2 border-t-2' />
      <DecorativeCorner className='top-2 right-2 border-r-2 border-t-2' />
      <DecorativeCorner className='bottom-2 left-2 border-l-2 border-b-2' />
      <DecorativeCorner className='bottom-2 right-2 border-r-2 border-b-2' />
      {children}
    </div>
  </div>
)
