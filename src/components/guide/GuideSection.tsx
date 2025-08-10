export const GuideSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className='mb-8'>
    <h2 className='text-3xl font-semibold text-slate-100 border-b-2 border-slate-700 pb-2 mb-4'>
      {title}
    </h2>
    {children}
  </section>
)
