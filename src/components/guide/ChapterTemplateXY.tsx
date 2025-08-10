import type { ChapterContentXY } from '@/content/chapters'
import { CelticDivider } from './CelticDivider'
import { GuideExampleList } from './GuideExampleList'
import { GuideHeader } from './GuideHeader'
import { GuideMemoryAid } from './GuideMemoryAid'
import { GuidePointList } from './GuidePointList'
import { GuideSection } from './GuideSection'
import { GuideUsageScenario } from './GuideUsageScenario'
import { CodeBlock } from './CodeBlock'

import { parseHtmlString } from '@/utils/parseHtmlString'

// This component is a bit of a hack to render HTML strings as React components
const StringToReact: React.FC<{ content: string }> = ({ content }) => (
  <div>{parseHtmlString(content)}</div>
)

export const ChapterTemplateXY: React.FC<{ data: ChapterContentXY }> = ({ data }) => (
  <>
    <GuideHeader title={data.title} image={data.image} />
    <main>
      <GuideSection title='Core Difference'>
        <p className='text-lg leading-relaxed'>{data.coreDifference}</p>
      </GuideSection>

      <CelticDivider />

      <GuideSection title='Key Characteristics'>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-2xl font-bold text-teal-200 mb-3'>
              {data.keyCharacteristics[0].topic}
            </h3>
            <GuidePointList points={data.keyCharacteristics[0].points} />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-teal-200 mb-3'>
              {data.keyCharacteristics[1].topic}
            </h3>
            <GuidePointList points={data.keyCharacteristics[1].points} />
          </div>
        </div>
      </GuideSection>

      <CelticDivider />

      <GuideSection title='When to Use'>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <GuideUsageScenario
              topic={data.whenToUse[0].topic}
              description={data.whenToUse[0].scenario}
            />
          </div>
          <div>
            <GuideUsageScenario
              topic={data.whenToUse[1].topic}
              description={data.whenToUse[1].scenario}
            />
          </div>
        </div>
      </GuideSection>

      <CelticDivider />

      <GuideSection title='Examples'>
        <GuideExampleList
          examples={data.examples.map((e, i) => ({
            id: `example-${i}`,
            content:
              typeof e === 'string' ? (
                <StringToReact content={e} />
              ) : (
                <CodeBlock language={e.language}>{e.code}</CodeBlock>
              ),
          }))}
        />
      </GuideSection>

      <CelticDivider />

      <GuideMemoryAid text={data.memoryAid} />
    </main>
  </>
)
