'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import ResumeCard from '@/components/resume-card'
import { resumeData } from '@/lib/resumeData'

export default function ResumesPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [downloadStatus, setDownloadStatus] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDownload = async (fileName: string, title: string) => {
    try {
      const link = document.createElement('a')
      link.href = `/resumes/${fileName}`
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setDownloadStatus(`${title} downloaded successfully!`)
      setTimeout(() => setDownloadStatus(null), 3000)
    } catch (error) {
      console.error('Download failed:', error)
      setDownloadStatus('Download failed. Please try again.')
      setTimeout(() => setDownloadStatus(null), 3000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Header with Back Button */}
      <header className="fixed top-0 w-full z-40 bg-[#050505]/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4">
          <motion.button
            onClick={() => router.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </motion.button>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20">
        <motion.div
          className="section-padding section-max"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Page Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              className="inline-block mb-4"
              variants={itemVariants}
            >
              <div className="border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-sm px-4 py-2 rounded-full uppercase tracking-wider">
                Resume Collections
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Choose Your Resume
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Select the resume that best matches the role you&apos;re hiring for. Each version is tailored with relevant skills and experience.
            </motion.p>
          </div>

          {/* Resume Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {resumeData.map((resume, index) => (
              <ResumeCard
                key={resume.id}
                resume={resume}
                index={index}
                onDownload={handleDownload}
              />
            ))}
          </motion.div>

          {/* Download Status Toast */}
          {downloadStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#00D4FF] text-black px-6 py-3 rounded-lg font-semibold shadow-lg"
            >
              {downloadStatus}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="border-t border-white/5 mt-16 md:mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="section-padding section-max text-center text-gray-500 text-sm">
          <p>
            Can&apos;t find what you need? <a href="mailto:hello@amrut.dev" className="text-[#00D4FF] hover:underline">Get in touch</a>
          </p>
        </div>
      </motion.footer>
    </main>
  )
}

}
