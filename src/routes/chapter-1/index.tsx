import { createFileRoute } from '@tanstack/react-router'
import { ChapterPage } from '@/components/guide/ChapterPage'
import { chapter1Data } from '@/content/chapters.ts'

export const Route = createFileRoute('/chapter-1/')({
  component: () => <ChapterPage data={chapter1Data} />,
})
