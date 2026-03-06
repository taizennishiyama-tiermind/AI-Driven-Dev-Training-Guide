import { useState } from 'react'
import { Check, Copy, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface PromptCardProps {
  readonly label: string
  readonly prompt: string
  readonly index: number
}

export function PromptCard({ label, prompt, index }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      className="group relative rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300 overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
            <Sparkles className="w-3 h-3" />
            {label}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
            title="Copy prompt"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                >
                  <Check className="w-4 h-4 text-green-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                >
                  <Copy className="w-4 h-4 text-gray-700 group-hover:text-primary-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        <p className="text-sm text-gray-800 font-mono leading-relaxed bg-gray-50 rounded-lg p-3">
          {prompt}
        </p>
      </div>
    </motion.div>
  )
}
