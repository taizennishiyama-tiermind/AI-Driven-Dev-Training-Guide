import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import {
  Lightbulb, MessageSquare, FolderOpen, FileText,
  Terminal, GitBranch, ShieldCheck, Plug, Brain,
} from 'lucide-react'
import type { Chapter } from '../../data/chapters'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb, MessageSquare, FolderOpen, FileText,
  Terminal, GitBranch, ShieldCheck, Plug, Brain,
}

interface InteractiveChapterCardProps {
  readonly chapter: Chapter
  readonly index: number
}

export function InteractiveChapterCard({ chapter, index }: InteractiveChapterCardProps) {
  const Icon = iconMap[chapter.icon] ?? BookOpen

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <Link
        to={`/chapter/${chapter.id}`}
        className="group block relative rounded-2xl overflow-hidden"
      >
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative p-6 border border-gray-200 bg-white rounded-2xl overflow-hidden"
        >
          {/* Hover gradient */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${chapter.color}08 0%, ${chapter.color}03 100%)`
            }}
          />

          {/* Corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at top right, ${chapter.color}12 0%, transparent 70%)`
            }}
          />

          <div className="relative">
            {/* Top row */}
            <div className="flex items-start justify-between mb-4">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: `${chapter.color}12` }}
              >
                <span style={{ color: chapter.color }}><Icon className="w-6 h-6" /></span>
              </motion.div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">
                  {chapter.duration}
                </span>
                <motion.div
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-primary-50 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all" />
                </motion.div>
              </div>
            </div>

            {/* Chapter number & title */}
            <div className="mb-2">
              <span
                className="text-[10px] font-extrabold uppercase tracking-widest"
                style={{ color: chapter.color }}
              >
                {chapter.id === 9 ? 'Bonus' : `Chapter ${chapter.id}`}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors mb-2">
              {chapter.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
              {chapter.coreMessage}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {chapter.sections.slice(0, 3).map((section) => (
                <span
                  key={section.id}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-gray-50 text-gray-700 border border-gray-100"
                >
                  {section.title}
                </span>
              ))}
              {chapter.sections.length > 3 && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-50 text-gray-700 border border-gray-100">
                  +{chapter.sections.length - 3}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
