interface GuideHeaderProps {
  title: string
  image: {
    large: string
    medium: string
    small: string
  }
}

export const GuideHeader: React.FC<GuideHeaderProps> = ({ title, image }) => (
  <header className='flex flex-col gap-4 text-center mb-10'>
    <h1 className='text-2xl md:text-4xl font-bold text-teal-200 mb-2 tracking-wider'>{title}</h1>
    <img
      src={image.medium} // Fallback
      srcSet={`${image.small} 480w, ${image.medium} 800w, ${image.large} 1200w`}
      sizes='(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px'
      alt={title}
      loading='lazy'
      className='w-4/6 h-auto border-12 border-stone-800 mx-auto'
    />
  </header>
)
