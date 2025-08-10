import towerLarge from '@/assets/img/chapter-1/tower-large.webp'
import towerMedium from '@/assets/img/chapter-1/tower-medium.webp'
import towerSmall from '@/assets/img/chapter-1/tower-small.webp'
import treeLarge from '@/assets/img/chapter-2/tree-large.webp'
import treeMedium from '@/assets/img/chapter-2/tree-medium.webp'
import treeSmall from '@/assets/img/chapter-2/tree-small.webp'

// Generic types for content sections
interface ImageAssets {
  large: string
  medium: string
  small: string
}

interface StructuredPoint {
  title: string
  content: string
}

interface Point {
  topic: string
  points: (string | StructuredPoint)[]
}

interface Usage {
  topic: string
  scenario: string
}

// Base interface for all chapters
interface ChapterBase {
  id: string
  title: string
  image: ImageAssets
  examples: (string | { code: string; language: string })[]
  memoryAid: string
}

// Interface for Template X (single topic)
export interface ChapterContentX extends ChapterBase {
  type: 'X'
  coreDefinition: string
  keyCharacteristics: Point
  whenToUse: Usage
}

// Interface for Template XY (comparison topic)
export interface ChapterContentXY extends ChapterBase {
  type: 'XY'
  coreDifference: string
  keyCharacteristics: [Point, Point]
  whenToUse: [Usage, Usage]
}

export type ChapterContent = ChapterContentX | ChapterContentXY

// Chapter 1 Data (Template X)
export const chapter1Data: ChapterContentX = {
  type: 'X',
  id: 'what-is-react',
  title: 'Chapter 1: What is React & Why Use It?',
  image: {
    large: towerLarge,
    medium: towerMedium,
    small: towerSmall,
  },
  coreDefinition:
    'React is a JavaScript library for building user interfaces through reusable components and declarative programming, where you describe what the UI should look like rather than how to manipulate it.',
  keyCharacteristics: {
    topic: 'React',
    points: [
      '<strong>Component-based architecture:</strong> UI broken into independent, reusable pieces',
      '<strong>Virtual DOM:</strong> Efficient rendering through in-memory representation of real DOM',
      '<strong>Declarative paradigm:</strong> Describe desired state, React handles DOM updates',
      '<strong>Unidirectional data flow:</strong> Data flows down through props, events bubble up',
      '<strong>JSX syntax:</strong> JavaScript extension allowing HTML-like syntax in components',
      '<strong>Rich ecosystem:</strong> Extensive tooling, libraries, and community support',
    ],
  },
  whenToUse: {
    topic: 'React',
    scenario:
      'Building interactive web applications with dynamic content, complex state management needs, or when component reusability is crucial',
  },
  examples: [
    '<strong>E-commerce platform:</strong> Product catalogs with filtering, shopping carts, and user dashboards benefit from component reusability and state management',
    "<strong>Social media feed:</strong> Dynamic content updates, real-time interactions, and complex UI states are handled efficiently through React's virtual DOM",
    "<strong>Data visualization dashboard:</strong> Interactive charts and widgets that need frequent updates leverage React's declarative approach and component isolation",
  ],
  memoryAid:
    'Choose React when you need interactive UIs with reusable components and complex state management.',
}

// Chapter 2 Data (Template XY)
export const chapter2Data: ChapterContentXY = {
  type: 'XY',
  id: 'components-vs-elements',
  title: 'Chapter 2: Components vs Elements',
  image: {
    large: treeLarge,
    medium: treeMedium,
    small: treeSmall,
  },
  coreDifference:
    'Components are the blueprint (function/class definition), while elements are the immutable objects that describe what should appear on screen when components are invoked.',
  keyCharacteristics: [
    {
      topic: 'Components',
      points: [
        '<strong>Blueprint functions:</strong> JavaScript functions or classes that return JSX',
        '<strong>Reusable definitions:</strong> Can be called multiple times with different props',
        '<strong>Accept props:</strong> Receive data through parameters',
        '<strong>Capitalized naming:</strong> Must start with uppercase letter for JSX recognition',
        '<strong>Contain logic:</strong> Hold state, effects, and business logic',
      ],
    },
    {
      topic: 'Elements',
      points: [
        {
          title: 'Plain objects:',
          content: 'Immutable JavaScript objects with type and props',
        },
        {
          title: 'JSX compilation result:',
          content: 'What JSX transforms into via React.createElement()',
        },
        {
          title: 'Virtual DOM nodes:',
          content: 'Describe desired DOM structure without creating it',
        },
        {
          title: 'No behavior:',
          content: 'Pure data with no methods or lifecycle',
        },
        {
          title: 'Lightweight:',
          content: 'Simple objects React uses for efficient diffing',
        },
      ],
    },
  ],
  whenToUse: [
    {
      topic: 'Components',
      scenario: 'When defining reusable UI logic, managing state, or creating custom functionality',
    },
    {
      topic: 'Elements',
      scenario: 'Automatically created when you write JSX - React handles this abstraction',
    },
  ],
  examples: [
    {
      code: 'function Welcome(props) { return <h1>Hello, {props.name}</h1>; }',
      language: 'javascript',
    },
    { code: '<Welcome name="Sarah" />', language: 'jsx' },
    '<strong>Multiple elements:</strong> Same Welcome component creates different elements with different props',
  ],
  memoryAid: 'Components are cookie cutters, elements are the shaped dough ready to bake.',
}
