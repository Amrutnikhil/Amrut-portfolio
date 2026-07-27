export type IconType =
  | 'brain'
  | 'cpu'
  | 'zap'
  | 'barchart'
  | 'target'
  | 'palette'
  | 'wrench'

export interface Resume {
  id: string
  title: string
  description: string
  tags: string[]
  fileName: string
  iconType: IconType
  featured?: boolean
}

export const resumeData: Resume[] = [
  {
    id: 'ai-ml',
    title: 'AI / Machine Learning',
    description:
      'Machine Learning, Deep Learning, Computer Vision, LLMs, RAG, Agentic AI, Python, AI Engineering.',
    tags: ['AI', 'Machine Learning', 'LLM', 'RAG', 'Python', 'Deep Learning'],
    fileName: 'Amrut_B_Nargund(CS).pdf',
    iconType: 'brain',
    featured: true,
  },
  {
    id: 'ece',
    title: 'Electronics & Communication (ECE)',
    description:
      'Embedded Systems, STM32, Digital Electronics, PCB Design, Microcontrollers, Electronics Engineering.',
    tags: ['STM32', 'Embedded C', 'PCB', 'Electronics', 'Microcontrollers'],
    fileName: 'Amrut_B_Nargund(EC).pdf',
    iconType: 'cpu',
  },
  {
    id: 'robotics',
    title: 'Robotics Engineer',
    description:
      'ROS2, SLAM, LiDAR, Sensor Fusion, Computer Vision, Autonomous Systems, Robotics Software.',
    tags: ['ROS2', 'SLAM', 'LiDAR', 'Robotics', 'Sensor Fusion'],
    fileName: 'Amrut_B_Nargund(Robotics).pdf',
    iconType: 'zap',
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst / Business Analyst',
    description:
      'SQL, Python, Power BI, Excel, Data Visualisation, Business Intelligence, Dashboards.',
    tags: ['SQL', 'Power BI', 'Python', 'Excel', 'Analytics'],
    fileName: 'Amrut_B_Nargund(DA_BA).pdf',
    iconType: 'barchart',
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description:
      'Product Strategy, Roadmaps, User Research, Product Analytics, Agile, Cross-functional Collaboration.',
    tags: ['Product', 'Strategy', 'Analytics', 'Agile', 'Research'],
    fileName: 'Amrut_B_Nargund(PM).pdf',
    iconType: 'target',
  },
  {
    id: 'ui-ux',
    title: 'UI / UX Designer',
    description:
      'User Experience, User Interface Design, Wireframing, Prototyping, Design Systems, Figma.',
    tags: ['UI', 'UX', 'Figma', 'Design', 'Prototype'],
    fileName: 'Amrut_B_Nargund(UIUX).pdf',
    iconType: 'palette',
  },
  {
    id: 'mechanical',
    title: 'Mechanical Engineer',
    description:
      'CAD Design, SolidWorks, Fusion 360, Mechanical Design, Manufacturing, Product Development.',
    tags: ['CAD', 'SolidWorks', 'Fusion 360', 'Mechanical', 'Design'],
    fileName: 'Amrut_B_Nargund(Mech).pdf',
    iconType: 'wrench',
  },
]