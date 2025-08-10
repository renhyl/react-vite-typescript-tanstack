const GothicListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className='flex items-start mb-3'>
    <span
      className='text-xl text-teal-300 mr-4 -mt-0.5 transform rotate-45 font-serif'
      aria-hidden='true'
    >
      +
    </span>
    <span>{children}</span>
  </li>
)

interface GuidePointListProps {
  points: (string | { title: string; content: string })[]
}

export const GuidePointList: React.FC<GuidePointListProps> = ({ points }) => (
  <ul className='list-none pl-0'>
    {points.map((point, index) => (
      <GothicListItem key={index}>
        {typeof point === 'string' ? (
          <span dangerouslySetInnerHTML={{ __html: point }} />
        ) : (
          <>
            <strong>{point.title}</strong> {point.content}
          </>
        )}
      </GothicListItem>
    ))}
  </ul>
)
