'use client';

import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      tag: 'ROBOTICS • FLAGSHIP',
      title: 'Autonomous Floor Tile Laying Robot',
      description: 'Industry-grade autonomous robot for floor tile installation. Full mechanical design, electrical architecture, ROS navigation, LiDAR mapping, and vacuum gripper system — concept to prototype.',
      tech: ['ROS', 'Jetson Nano', 'LiDAR', 'Fusion 360', 'SolidWorks', 'Python', 'C++'],
      gradient: 'from-[#0a0a1a] to-[#0d1b2a]',
    },
    {
      tag: 'COMPUTER VISION • AI',
      title: 'UAV-Based Pipe Crack Detection',
      description: 'Computer vision system for detecting cracks in buried pipes using UAV-captured imagery. Custom dataset, ML model training, and automated inspection workflows.',
      tech: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'UAV'],
      gradient: 'from-[#0a0a1a] to-[#1a0a2e]',
    },
    {
      tag: 'AI • AGENTIC AI',
      title: 'AI Agent Automation Platform',
      description: 'Intelligent agentic AI pipeline for autonomous multi-step task execution. LLM-based reasoning with tool integration, achieving 85% task accuracy with minimal human intervention.',
      tech: ['Python', 'LangChain', 'LLMs', 'Agentic AI', 'Machine Learning'],
      gradient: 'from-[#0a0a1a] to-[#1a0a2e]',
    },
    {
      tag: 'ROBOTICS • COMPETITION',
      title: 'Autonomous Competition Robot',
      description: 'Competition-grade autonomous robot with custom mechanical subsystems, drivetrain assemblies, and sensor-integrated hardware-software interfacing. Top 5% among university teams.',
      tech: ['CAD', 'Mechanical Design', 'Sensor Fusion', 'C++', 'Arduino'],
      gradient: 'from-[#0a0a1a] to-[#0d1b2a]',
    },
    {
      tag: 'GAME DEVELOPMENT',
      title: 'Game Development Projects',
      description: 'Interactive game environments and experiences built using Unreal Engine and Godot. Explores real-time rendering, physics simulations, game mechanics, and immersive world design.',
      tech: ['Unreal Engine', 'Godot', 'C++', 'Game Design', '3D Environments', 'Physics'],
      gradient: 'from-[#0a1a0a] to-[#1a2e0a]',
    },
    {
      tag: 'DATA ANALYTICS',
      title: 'Sales Analytics Dashboard',
      description: 'Interactive Power BI dashboard analyzing sales performance, customer trends, and product insights. SQL data modeling, DAX measures, KPI cards, and geographic visualizations.',
      tech: ['Power BI', 'SQL', 'DAX', 'Data Analytics', 'SSMS', 'Excel'],
      gradient: 'from-[#1a0a0a] to-[#2e1a0a]',
    },
    {
      tag: 'DATA SCIENCE',
      title: 'Product Segmentation Analysis',
      description: 'Product-level segmentation on sales data using Python, Pandas, and K-Means clustering. Computed product metrics, identified clusters, and generated insights for product prioritization.',
      tech: ['Python', 'Pandas', 'K-Means', 'Matplotlib', 'Scikit-learn'],
      gradient: 'from-[#1a0a0a] to-[#2e1a0a]',
    },
    {
      tag: 'UI/UX DESIGN',
      title: 'HMI & UI/UX Design Portfolio',
      description: 'Human-machine interfaces for industrial robots and interactive UI prototypes in Figma. Wireframes, user flows, and high-fidelity prototypes for embedded displays and web apps.',
      tech: ['Figma', 'Adobe XD', 'UI/UX', 'HMI Design', 'Wireframing', 'Prototyping'],
      gradient: 'from-[#1a0a1a] to-[#2e0a2e]',
    },
    {
      tag: 'WEB DEVELOPMENT',
      title: 'YouTube Clone & Web Projects',
      description: 'Pixel-perfect responsive web applications built with HTML5, CSS3, JavaScript, and React. Focus on component architecture, performance optimization, and modern frontend patterns.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Responsive Design'],
      gradient: 'from-[#0a0a1a] to-[#1a0a2e]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[#00D4FF] text-sm tracking-widest uppercase mb-4">Projects</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg mb-12">Work spanning robotics, AI, game development, data analytics, and design</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card-base card-hover overflow-hidden group"
              variants={itemVariants}
            >
              {/* Gradient Placeholder */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient}`} />

              {/* Content */}
              <div className="p-5">
                <div className="text-[#00D4FF] text-xs uppercase tracking-wider font-semibold mb-3">
                  {project.tag}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
