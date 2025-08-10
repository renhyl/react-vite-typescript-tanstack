import type { ChapterContentX } from '@/content/chapters'
import { CelticDivider } from './CelticDivider'
import { GuideExampleList } from './GuideExampleList'
import { GuideHeader } from './GuideHeader'
import { GuideMemoryAid } from './GuideMemoryAid'
import { GuidePointList } from './GuidePointList'
import { GuideSection } from './GuideSection'
import { GuideUsageScenario } from './GuideUsageScenario'

// This component is a bit of a hack to render HTML strings as React components
const StringToReact: React.FC<{ content: string }> = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)

export const ChapterTemplateX: React.FC<{ data: ChapterContentX }> = ({ data }) => (
  <>
    <GuideHeader title={data.title} image={data.image} />
    <main>
      <GuideSection title='Core Definition'>
        <p className='text-lg leading-relaxed'>{data.coreDefinition}</p>
      </GuideSection>

      <CelticDivider />

      <GuideSection title='Key Characteristics'>
        <GuidePointList points={data.keyCharacteristics.points} />
      </GuideSection>

      <CelticDivider />

      <GuideSection title='When to Use'>
        <GuideUsageScenario topic={data.whenToUse.topic} description={data.whenToUse.scenario} />
      </GuideSection>

      <CelticDivider />

      <GuideSection title='Examples'>
        <GuideExampleList
          examples={data.examples.map((e) =>
            typeof e === 'string' ? (
              <StringToReact content={e} />
            ) : (
              <CodeBlock language={e.language}>{e.code}</CodeBlock>
            ),
          )}
        />
      </GuideSection>

      <CelticDivider />

      <GuideMemoryAid text={data.memoryAid} />
    </main>
  </>
)
