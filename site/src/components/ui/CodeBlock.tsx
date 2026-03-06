import { useState } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CodeBlockProps {
  readonly code: string
  readonly language?: string
  readonly title?: string
}

export function CodeBlock({ code, language = 'markdown', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden my-5 group">
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
          <Terminal className="w-3.5 h-3.5" />
          {title ?? language}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-200 transition-all"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="copied"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1 text-green-600"
              >
                <Check className="w-3.5 h-3.5" /> Copied
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1"
              >
                <Copy className="w-3.5 h-3.5" /> Copy
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-gray-950 text-gray-100 text-sm leading-relaxed font-mono">
        <code>{code}</code>
      </pre>
    </div>
  )
}
