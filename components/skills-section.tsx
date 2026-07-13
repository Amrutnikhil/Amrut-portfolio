'use client';

import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillBars = [
    { label: 'Robotics & Automation', percentage: 90 },
    { label: 'AI & Machine Learning', percentage: 80 },
    { label: 'Embedded Systems', percentage: 85 },
    { label: 'Mechanical Design & CAD', percentage: 85 },
    { label: 'Game Development', percentage: 70 },
    { label: 'Programming', percentage: 85 },
    { label: 'UI/UX & Product Design', percentage: 75 },
    { label: 'Data Analytics', percentage: 75 },
  ];

  const techCategories = [
    {
      title: 'Robotics & Automation',
      techs: ['ROS', 'LiDAR', 'SLAM', 'Sensor Fusion', 'Actuator Selection', 'Pneumatic Systems', 'Vacuum Handling', 'Motion Planning'],
    },
    {
      title: 'AI & Machine Learning',
      techs: ['Machine Learning', 'Deep Learning', 'LLMs', 'Agentic AI', 'Prompt Engineering', 'Model Training', 'Computer Vision', 'TensorFlow', 'OpenCV', 'YOLO'],
    },
    {
      title: 'Embedded Systems',
      techs: ['NVIDIA Jetson Nano', 'Arduino', 'ESP32', 'Raspberry Pi', 'NVIDIA Boards', 'I2C', 'SPI', 'MQTT', 'HMI Interfaces'],
    },
    {
      title: 'Mechanical Design & CAD',
      techs: ['Fusion 360', 'SolidWorks', 'GD&T', 'DFM', 'DFA', 'Technical Drawings', '3D Printing', 'Structural Analysis'],
    },
    {
      title: 'Game Development',
      techs: ['Unreal Engine', 'Godot', 'Game Design', '3D Environments', 'Physics Simulation', 'Real-Time Rendering'],
    },
    {
      title: 'Programming',
      techs: ['Python', 'C', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS', 'React.js', 'Node.js', 'Flask'],
    },
    {
      title: 'UI/UX & Product',
      techs: ['Figma', 'Adobe XD', 'Wire Framing', 'Prototyping', 'Product Lifecycle', 'KPI Definition', 'Data Visualization'],
    },
    {
      title: 'Tools & Platforms',
      techs: ['Git', 'VS Code', 'Power BI', 'Cadence', 'MySQL', 'Docker', 'Linux', 'Microsoft Tools', 'Excel', 'Notion'],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[#00D4FF] text-sm tracking-widest uppercase mb-4">Skills</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Technical Arsenal</h2>
        </motion.div>

        {/* Skill Bars */}
        <motion.div
          className="space-y-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillBars.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-300">{skill.label}</span>
                <span className="text-xs text-gray-400">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#00D4FF] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 border-b border-white/10 pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="tech-badge text-xs hover:border-[#00D4FF]/30 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
