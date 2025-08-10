import { createFileRoute } from '@tanstack/react-router'
import { ChapterPage } from '@/components/guide/ChapterPage'
import { chapter2Data } from '@/content/chapters.ts'

export const Route = createFileRoute('/chapter-2/')({
  component: () => <ChapterPage data={chapter2Data} />,
})
