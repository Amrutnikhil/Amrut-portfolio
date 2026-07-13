'use client';

import { motion } from 'framer-motion';

const skillBars = [
  { name: 'Robotics & Automation', percentage: 90 },
  { name: 'Mechanical Design & CAD', percentage: 85 },
  { name: 'Embedded Systems', percentage: 85 },
  { name: 'AI & Computer Vision', percentage: 75 },
  { name: 'Programming', percentage: 85 },
  { name: 'UI/UX & Product Design', percentage: 70 },
];

const skillCategories = [
  {
    category: 'Robotics & Automation',
    skills: [
      'ROS',
      'LiDAR',
      'SLAM',
      'Sensor Fusion',
      'Actuator Selection',
      'Pneumatic Systems',
      'Vacuum Handling',
      'Motion Planning',
    ],
  },
  {
    category: 'Mechanical Design',
    skills: [
      'Fusion 360',
      'SolidWorks',
      'GD&T',
      'DFM',
      'DFA',
      'Technical Drawings',
      '3D Printing',
      'Structural Analysis',
    ],
  },
  {
    category: 'Embedded Systems',
    skills: [
      'NVIDIA Jetson Nano',
      'Arduino',
      'ESP32',
      'Raspberry Pi',
      'NVIDIA Boards',
      'HMI Interfaces',
    ],
  },
  {
    category: 'AI & Computer Vision',
    skills: [
      'OpenCV',
      'Machine Learning',
      'Computer Vision',
      'LLMs',
      'Prompt Engineering',
      'Model Training',
      'TensorFlow',
    ],
  },
  {
    category: 'Programming',
    skills: [
      'Python',
      'C',
      'C++',
      'JavaScript',
      'SQL',
      'HTML',
      'CSS',
      'React.js',
      'Node.js',
      'Flask',
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      'Git',
      'VS Code',
      'Figma',
      'Power BI',
      'Cadence',
      'MySQL',
      'Unreal Engine',
      'Godot',
      'Linux',
      'Docker',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#050505] section-padding section-divider">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">SKILLS</div>
        <h2 className="section-heading">Technical Arsenal</h2>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 mb-16">
          {skillBars.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-white">
                  {skill.name}
                </label>
                <span className="text-sm text-gray-400">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full bg-[#00D4FF] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="space-y-10">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIdx * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-2 rounded-lg hover:border-[#00D4FF]/30 transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
