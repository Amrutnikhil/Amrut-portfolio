export type IconType = 'brain' | 'cpu' | 'zap' | 'barchart' | 'target' | 'palette' | 'wrench'

export interface Resume {
  id: string
  title: string
  description: string
  tags: string[]
  fileName: string
  iconType: IconType
  featured?: boolean
  updatedDate?: string
}

export const resumeData: Resume[] = [
  {
    id: 'ai-ml',
    title: 'AI / Machine Learning',
    description:
      'Machine Learning, Deep Learning, Computer Vision, LLMs, RAG, Agentic AI, Python, AI Engineering.',
    tags: ['AI', 'Machine Learning', 'LLM', 'RAG', 'Python', 'Deep Learning'],
    fileName: 'ai-ml.pdf',
    iconType: 'brain',
    featured: true,
    updatedDate: 'Dec 2024',
  },
  {
    id: 'ece',
    title: 'Electronics & Embedded (ECE)',
    description:
      'Embedded Systems, STM32, Digital Electronics, Microcontrollers, PCB Design, Electronics Engineering.',
    tags: ['STM32', 'Embedded C', 'PCB', 'Electronics', 'Microcontrollers'],
    fileName: 'ece.pdf',
    iconType: 'cpu',
    updatedDate: 'Nov 2024',
  },
  {
    id: 'robotics',
    title: 'Robotics Engineer',
    description:
      'ROS2, SLAM, LiDAR, Sensor Fusion, Computer Vision, Autonomous Systems, Robotics Software.',
    tags: ['ROS2', 'SLAM', 'LiDAR', 'Robotics', 'Sensor Fusion'],
    fileName: 'robotics.pdf',
    iconType: 'zap',
    updatedDate: 'Dec 2024',
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst / Business Analyst',
    description:
      'SQL, Python, Power BI, Excel, Data Visualisation, Analytics, Business Intelligence, Dashboards.',
    tags: ['SQL', 'Power BI', 'Python', 'Excel', 'Analytics'],
    fileName: 'data-analyst.pdf',
    iconType: 'barchart',
    updatedDate: 'Nov 2024',
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description:
      'Product Strategy, Roadmaps, User Research, Product Analytics, Agile, Cross-functional Collaboration.',
    tags: ['Product', 'Strategy', 'Analytics', 'Agile', 'Research'],
    fileName: 'product-manager.pdf',
    iconType: 'target',
    updatedDate: 'Nov 2024',
  },
  {
    id: 'ui-ux',
    title: 'UI / UX Designer',
    description:
      'User Experience, User Interface Design, Wireframing, Prototyping, Design Systems, Figma.',
    tags: ['UI', 'UX', 'Figma', 'Design', 'Prototype'],
    fileName: 'ui-ux.pdf',
    iconType: 'palette',
    updatedDate: 'Oct 2024',
  },
  {
    id: 'mechanical',
    title: 'Mechanical Engineer',
    description:
      'CAD Design, SolidWorks, Fusion 360, Mechanical Design, Manufacturing, Product Development.',
    tags: ['CAD', 'SolidWorks', 'Fusion 360', 'Mechanical', 'Design'],
    fileName: 'mechanical.pdf',
    iconType: 'wrench',
    updatedDate: 'Oct 2024',
  },
]
    iconType: 'wrench',
  },
]
