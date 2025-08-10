interface GuideMemoryAidProps {
  text: string
}

export const GuideMemoryAid: React.FC<GuideMemoryAidProps> = ({ text }) => (
  <section className='bg-slate-900/70 border-2 hover:bg-slate-700/50 hover:border-teal-300 border-slate-600 p-6 text-center shadow-lg'>
    <h2 className='text-2xl font-semibold text-slate-100 mb-2'>Memory Aid</h2>
    <p className='text-xl text-teal-200 leading-relaxed italic'>{text}</p>
  </section>
)
