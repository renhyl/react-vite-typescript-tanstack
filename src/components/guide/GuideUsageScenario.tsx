interface GuideUsageScenarioProps {
  topic: string
  description: string
}

export const GuideUsageScenario: React.FC<GuideUsageScenarioProps> = ({ topic, description }) => (
  <div className='border border-slate-700 p-4 hover:bg-slate-700/50 hover:border-teal-300 transition-all duration-300'>
    <h3 className='font-bold text-xl text-teal-300'>Use {topic} when...</h3>
    <p className='mt-2'>{description}</p>
  </div>
)
