import { cn } from '@/utils/cn'

const DecorativeCorner: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={cn(`absolute w-8 h-8 border-stone-700 ${className}`)} aria-hidden='true'></div>
  )
}

export default DecorativeCorner
