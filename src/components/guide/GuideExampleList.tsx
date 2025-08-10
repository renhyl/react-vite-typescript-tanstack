interface GuideExampleListProps {
  examples: { id: string; content: React.ReactNode }[]
}

export const GuideExampleList: React.FC<GuideExampleListProps> = ({ examples }) => (
  <ul className='space-y-6'>
    {examples.map((example) => (
      <li key={example.id} className='rounded-lg'>
        {example.content}
      </li>
    ))}
  </ul>
)
