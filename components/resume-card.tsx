'use client'

import { motion } from 'framer-motion'
import { Download, Star, Brain, Cpu, Zap, BarChart3, Target, Palette, Wrench } from 'lucide-react'
import { Resume } from '@/lib/resumeData'
import { useState } from 'react'

function getIconComponent(iconType: string) {
  const iconProps = { className: 'w-12 h-12 text-[#00D4FF]' }
  const iconMap: Record<string, React.ReactNode> = {
    brain: <Brain {...iconProps} />,
    cpu: <Cpu {...iconProps} />,
    zap: <Zap {...iconProps} />,
    barchart: <BarChart3 {...iconProps} />,
    target: <Target {...iconProps} />,
    palette: <Palette {...iconProps} />,
    wrench: <Wrench {...iconProps} />,
  }
  return iconMap[iconType] || <Brain {...iconProps} />
}

interface ResumeCardProps {
  resume: Resume
  index: number
  onDownload: (fileName: string, title: string) => void
}

export default function ResumeCard({
  resume,
  index,
  onDownload,
}: ResumeCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = () => {
    onDownload(resume.fileName, resume.title)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="card-base card-hover relative overflow-hidden h-full p-6 md:p-8 flex flex-col">
        {/* Featured Badge */}
        {resume.featured && (
          <motion.div
            className="absolute top-4 right-4 bg-[#00D4FF] text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Star size={12} className="fill-current" />
            Featured
          </motion.div>
        )}

        {/* Icon */}
        <motion.div
          className="mb-6"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {getIconComponent(resume.iconType)}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
          {resume.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base mb-6 flex-grow">
          {resume.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {resume.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="tech-badge"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Updated Date */}
        {resume.updatedDate && (
          <p className="text-xs text-gray-500 mb-4">
            Last updated: {resume.updatedDate}
          </p>
        )}

        {/* Download Button */}
        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#00D4FF] text-black font-semibold rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-[#00D4FF]/90 transition-all duration-200"
        >
          <Download size={18} />
          Download Resume
        </motion.button>

        {/* Hover Glow Effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-[#00D4FF]/5 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    </motion.div>
  )
}
