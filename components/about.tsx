'use client';

export default function About() {
  const specializations = [
    { emoji: '🤖', title: 'Robotics & Automation' },
    { emoji: '🧠', title: 'AI & Machine Learning' },
    { emoji: '🎮', title: 'Game Development' },
    { emoji: '⚡', title: 'Embedded Systems' },
    { emoji: '🎨', title: 'UI/UX Design' },
    { emoji: '👁️', title: 'Computer Vision' },
    { emoji: '🔧', title: 'Mechanical Design & CAD' },
    { emoji: '📊', title: 'Data Analytics' },
  ];

  return (
    <section id="about" className="section-padding bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="fade-in-up">
          <p className="section-label">ABOUT</p>
          <h2 className="section-heading">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left Column */}
          <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-gray-400 leading-relaxed">
              Final-year Electronics & Communication Engineering student at PES University, Bengaluru, with a Minor in Computer Science. I'm a multidisciplinary engineer who builds across robotics, AI, game development, and full-stack applications — working at the intersection of hardware, software, and design.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From designing autonomous robots with ROS and Jetson Nano, to training ML models and building agentic AI pipelines, to creating game environments in Unreal Engine and Godot, to crafting UI/UX in Figma — I bring a unique breadth of technical skills that lets me tackle problems from multiple angles.
            </p>
          </div>

          {/* Right Column - Specializations Grid */}
          <div className="grid grid-cols-2 gap-4 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {specializations.map((spec, i) => (
              <div key={i} className="card-base card-hover p-4 text-center">
                <div className="text-2xl mb-2">{spec.emoji}</div>
                <p className="text-sm text-gray-300">{spec.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
