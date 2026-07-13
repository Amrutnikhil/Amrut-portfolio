'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    tag: 'FLAGSHIP • L&T FUNDED',
    title: 'Autonomous Floor Tile Laying Robot',
    description:
      'Industry-grade autonomous robot for automated floor tile installation. Designed the full mechanical system, electrical architecture, and embedded software stack. Features ROS-based navigation, LiDAR mapping, precision motor control, and a vacuum-based tile handling system — developed from concept to functional prototype.',
    technologies: [
      'ROS',
      'Jetson Nano',
      'LiDAR',
      'Fusion 360',
      'SolidWorks',
      'Python',
      'C++',
      'Motor Control',
    ],
  },
  {
    id: 2,
    tag: 'COMPUTER VISION',
    title: 'UAV-Based Pipe Crack Detection',
    description:
      'Computer vision system for detecting cracks in buried pipes using imagery captured by a UAV-mounted camera. Built a custom image dataset, trained machine learning models for crack detection, and implemented automated inspection workflows for infrastructure monitoring.',
    technologies: [
      'Python',
      'OpenCV',
      'Machine Learning',
      'Computer Vision',
      'UAV',
      'Image Processing',
    ],
  },
  {
    id: 3,
    tag: 'AI SYSTEMS',
    title: 'AI Agent Workflow Automation',
    description:
      'Intelligent agentic AI pipeline for autonomous multi-step task execution. Leverages LLM-based reasoning and tool integration to automate complex workflows with minimal human intervention, achieving 85% task accuracy.',
    technologies: [
      'Python',
      'LangChain',
      'LLMs',
      'Agentic AI',
      'Machine Learning',
      'FastAPI',
    ],
  },
  {
    id: 4,
    tag: 'ROBOTICS',
    title: 'Autonomous Competition Robot',
    description:
      'Designed and fabricated a competition-grade autonomous robot featuring custom mechanical subsystems, drivetrain assemblies, and sensor-integrated hardware-software interfacing. Achieved top 5% performance among participating university teams.',
    technologies: [
      'CAD',
      'Mechanical Design',
      'Sensor Fusion',
      'C++',
      'Arduino',
      'Rapid Prototyping',
    ],
  },
  {
    id: 5,
    tag: 'DATA ANALYTICS',
    title: 'Sales Analytics Dashboard',
    description:
      'Interactive Power BI dashboard analyzing sales performance, customer trends, and product insights. Built with SQL data modeling, DAX measures, KPI cards, and dynamic visualizations including geographic mapping and slicer filters.',
    technologies: ['Power BI', 'SQL', 'DAX', 'Data Analytics', 'SSMS', 'Excel'],
  },
  {
    id: 6,
    tag: 'UI/UX DESIGN',
    title: 'HMI & UI/UX Design Portfolio',
    description:
      'Designed human-machine interfaces for industrial robotic platforms and interactive UI prototypes using Figma. Created wireframes, user flows, and high-fidelity prototypes following modern design principles for both embedded displays and web applications.',
    technologies: [
      'Figma',
      'Adobe XD',
      'UI/UX',
      'HMI Design',
      'Wireframing',
      'Prototyping',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#050505] section-padding section-divider">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">PROJECTS</div>
        <h2 className="section-heading">Featured Projects</h2>
        <p className="text-gray-400 mt-4 max-w-2xl">
          Engineering solutions across robotics, AI, and embedded systems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="card-base overflow-hidden card-hover group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e]" />

              {/* Content */}
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[#00D4FF] font-semibold">
                  {project.tag}
                </div>
                <h3 className="text-lg font-semibold text-white mt-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-3 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/5 border border-white/10 text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
