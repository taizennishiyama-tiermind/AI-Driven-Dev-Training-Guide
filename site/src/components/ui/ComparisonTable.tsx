import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import type { ComparisonRow } from '../../data/chapters'

interface ComparisonTableProps {
  readonly rows: readonly ComparisonRow[]
}

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="my-8 rounded-xl border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
        <div className="px-4 py-3 text-xs font-bold text-red-500 uppercase tracking-wider flex items-center gap-1.5">
          <X className="w-3.5 h-3.5" />
          よくある誤解
        </div>
        <div className="px-4 py-3 text-xs font-bold text-green-600 uppercase tracking-wider flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5" />
          実際
        </div>
      </div>
      {rows.map((row, i) => (
        <motion.div
          key={row.misconception}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
          className={`grid grid-cols-2 ${i < rows.length - 1 ? 'border-b border-gray-200' : ''}`}
        >
          <div className="px-4 py-3 text-sm text-gray-700 bg-red-50/40">
            {row.misconception}
          </div>
          <div className="px-4 py-3 text-sm text-gray-900 font-medium bg-green-50/40">
            {row.reality}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
