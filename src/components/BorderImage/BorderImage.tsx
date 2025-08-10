import { cn } from '@/utils/cn'

// Define the component's props
export interface BorderedImageProps {
  src: string
  alt: string
  srcSet?: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  className?: string
}

const BorderedImage: React.FC<BorderedImageProps> = ({
  src,
  alt,
  srcSet,
  sizes,
  loading,
  className,
}) => {
  return (
    <div
      className={`
        border-solid
        border-12
        border-stone-800
      `}
    >
      <img
        src={src}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        loading={loading}
        className={cn('block h-auto w-auto', className)}
      />
    </div>
  )
}

export default BorderedImage
