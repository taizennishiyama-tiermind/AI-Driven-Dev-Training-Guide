import { motion } from 'framer-motion'
import type { ConcreteExample } from '../../data/qa'

interface ConcreteExampleCardProps {
  readonly example: ConcreteExample
  readonly index: number
}

export function ConcreteExampleCard({ example, index }: ConcreteExampleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
      className="rounded-xl border border-gray-200 overflow-hidden"
    >
      {/* Situation header */}
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Scenario</span>
        <p className="text-sm font-semibold text-gray-800 mt-0.5">{example.situation}</p>
      </div>

      {/* Input */}
      <div className="px-5 py-4 border-b border-gray-100">
        <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest">Input</span>
        <p className="text-sm text-gray-700 mt-1 font-mono leading-relaxed bg-gray-50 rounded-lg p-3 border border-gray-100">
          {example.input}
        </p>
      </div>

      {/* Result */}
      <div className="px-5 py-4">
        <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Result</span>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{example.result}</p>
      </div>
    </motion.div>
  )
}
