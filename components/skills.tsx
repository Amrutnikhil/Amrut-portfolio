'use client';

const skillBars = [
  { name: 'Robotics & Automation', percentage: 90 },
  { name: 'AI & Machine Learning', percentage: 80 },
  { name: 'Embedded Systems', percentage: 85 },
  { name: 'Mechanical Design & CAD', percentage: 85 },
  { name: 'Game Development', percentage: 70 },
  { name: 'Programming', percentage: 85 },
  { name: 'UI/UX & Product Design', percentage: 75 },
  { name: 'Data Analytics', percentage: 75 },
];

const skillCategories = [
  {
    category: 'Robotics & Automation',
    skills: ['ROS', 'LiDAR', 'SLAM', 'Sensor Fusion', 'Actuator Selection', 'Pneumatic Systems', 'Vacuum Handling', 'Motion Planning'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'LLMs', 'Agentic AI', 'Prompt Engineering', 'Model Training', 'Computer Vision', 'TensorFlow', 'OpenCV', 'YOLO'],
  },
  {
    category: 'Embedded Systems',
    skills: ['NVIDIA Jetson Nano', 'Arduino', 'ESP32', 'Raspberry Pi', 'NVIDIA Boards', 'I2C', 'SPI', 'MQTT', 'HMI Interfaces'],
  },
  {
    category: 'Mechanical Design & CAD',
    skills: ['Fusion 360', 'SolidWorks', 'GD&T', 'DFM', 'DFA', 'Technical Drawings', '3D Printing', 'Structural Analysis'],
  },
  {
    category: 'Game Development',
    skills: ['Unreal Engine', 'Godot', 'Game Design', '3D Environments', 'Physics Simulation', 'Real-Time Rendering'],
  },
  {
    category: 'Programming',
    skills: ['Python', 'C', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS', 'React.js', 'Node.js', 'Flask'],
  },
  {
    category: 'UI/UX & Product',
    skills: ['Figma', 'Adobe XD', 'Wire Framing', 'Prototyping', 'Product Lifecycle', 'KPI Definition', 'Data Visualization'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'VS Code', 'Power BI', 'Cadence', 'MySQL', 'Docker', 'Linux', 'Microsoft Tools', 'Excel', 'Notion'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="fade-in-up">
          <p className="section-label">SKILLS</p>
          <h2 className="section-heading">Technical Arsenal</h2>
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 mb-16">
          {skillBars.map((skill, idx) => (
            <div key={skill.name} className="fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-white">
                  {skill.name}
                </label>
                <span className="text-sm text-gray-400">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  style={{ width: `${skill.percentage}%` }}
                  className="h-full bg-[#00D4FF] rounded-full transition-all duration-700"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="space-y-10">
          {skillCategories.map((category, categoryIdx) => (
            <div
              key={category.category}
              className="fade-in-up"
              style={{ animationDelay: `${categoryIdx * 0.05}s` }}
            >
              <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
