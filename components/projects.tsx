'use client';

const projects = [
  {
    id: 1,
    tag: 'ROBOTICS • FLAGSHIP',
    title: 'Autonomous Floor Tile Laying Robot',
    description: 'Industry-grade autonomous robot for floor tile installation. Full mechanical design, electrical architecture, ROS navigation, LiDAR mapping, and vacuum gripper system — concept to prototype.',
    gradient: 'from-[#0a0a1a] to-[#0d1b2a]',
    technologies: ['ROS', 'Jetson Nano', 'LiDAR', 'Fusion 360', 'SolidWorks', 'Python', 'C++'],
  },
  {
    id: 2,
    tag: 'COMPUTER VISION • AI',
    title: 'UAV-Based Pipe Crack Detection',
    description: 'Computer vision system for detecting cracks in buried pipes using UAV-captured imagery. Custom dataset, ML model training, and automated inspection workflows.',
    gradient: 'from-[#0a0a1a] to-[#1a0a2e]',
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'UAV'],
  },
  {
    id: 3,
    tag: 'AI • AGENTIC AI',
    title: 'AI Agent Automation Platform',
    description: 'Intelligent agentic AI pipeline for autonomous multi-step task execution. LLM-based reasoning with tool integration, achieving 85% task accuracy with minimal human intervention.',
    gradient: 'from-[#0a0a1a] to-[#1a0a2e]',
    technologies: ['Python', 'LangChain', 'LLMs', 'Agentic AI', 'Machine Learning'],
  },
  {
    id: 4,
    tag: 'ROBOTICS • COMPETITION',
    title: 'Autonomous Competition Robot',
    description: 'Competition-grade autonomous robot with custom mechanical subsystems, drivetrain assemblies, and sensor-integrated hardware-software interfacing. Top 5% among university teams.',
    gradient: 'from-[#0a0a1a] to-[#0d1b2a]',
    technologies: ['CAD', 'Mechanical Design', 'Sensor Fusion', 'C++', 'Arduino'],
  },
  {
    id: 5,
    tag: 'GAME DEVELOPMENT',
    title: 'Game Development Projects',
    description: 'Interactive game environments and experiences built using Unreal Engine and Godot. Explores real-time rendering, physics simulations, game mechanics, and immersive world design.',
    gradient: 'from-[#0a1a0a] to-[#1a2e0a]',
    technologies: ['Unreal Engine', 'Godot', 'C++', 'Game Design', '3D Environments', 'Physics'],
  },
  {
    id: 6,
    tag: 'DATA ANALYTICS',
    title: 'Sales Analytics Dashboard',
    description: 'Interactive Power BI dashboard analyzing sales performance, customer trends, and product insights. SQL data modeling, DAX measures, KPI cards, and geographic visualizations.',
    gradient: 'from-[#1a0a0a] to-[#2e1a0a]',
    technologies: ['Power BI', 'SQL', 'DAX', 'Data Analytics', 'SSMS', 'Excel'],
  },
  {
    id: 7,
    tag: 'DATA SCIENCE',
    title: 'Product Segmentation Analysis',
    description: 'Product-level segmentation on sales data using Python, Pandas, and K-Means clustering. Computed product metrics, identified clusters, and generated insights for product prioritization.',
    gradient: 'from-[#1a0a0a] to-[#2e1a0a]',
    technologies: ['Python', 'Pandas', 'K-Means', 'Matplotlib', 'Scikit-learn'],
  },
  {
    id: 8,
    tag: 'UI/UX DESIGN',
    title: 'HMI & UI/UX Design Portfolio',
    description: 'Human-machine interfaces for industrial robots and interactive UI prototypes in Figma. Wireframes, user flows, and high-fidelity prototypes for embedded displays and web apps.',
    gradient: 'from-[#1a0a1a] to-[#2e0a2e]',
    technologies: ['Figma', 'Adobe XD', 'UI/UX', 'HMI Design', 'Wireframing', 'Prototyping'],
  },
  {
    id: 9,
    tag: 'WEB DEVELOPMENT',
    title: 'YouTube Clone & Web Projects',
    description: 'Pixel-perfect responsive web applications built with HTML5, CSS3, JavaScript, and React. Focus on component architecture, performance optimization, and modern frontend patterns.',
    gradient: 'from-[#0a0a1a] to-[#0d1b2a]',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Responsive Design'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="fade-in-up">
          <p className="section-label">PROJECTS</p>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Work spanning robotics, AI, game development, data analytics, and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="card-base overflow-hidden card-hover fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Image Placeholder */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient}`} />

              {/* Content */}
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest text-[#00D4FF] font-semibold">
                  {project.tag}
                </div>
                <h3 className="text-lg font-semibold text-white mt-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
