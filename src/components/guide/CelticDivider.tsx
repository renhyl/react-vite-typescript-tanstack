export const CelticDivider: React.FC = () => (
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
