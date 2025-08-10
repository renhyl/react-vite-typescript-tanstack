import type { ChapterContent } from '@/content/chapters'
import { ChapterTemplateX } from './ChapterTemplateX'
import { ChapterTemplateXY } from './ChapterTemplateXY'
import { GuideWrapper } from './GuideWrapper'

interface ChapterPageProps {
  data: ChapterContent
}

export const ChapterPage: React.FC<ChapterPageProps> = ({ data }) => {
  return (
    <GuideWrapper>
      {data.type === 'X' ? <ChapterTemplateX data={data} /> : <ChapterTemplateXY data={data} />}
    </GuideWrapper>
  )
}
