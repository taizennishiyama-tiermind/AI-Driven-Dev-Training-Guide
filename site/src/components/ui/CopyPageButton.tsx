import { useState, useCallback } from 'react'
import { Copy, Check } from 'lucide-react'

interface CopyPageButtonProps {
  readonly getMarkdown: () => string
}

export function CopyPageButton({ getMarkdown }: CopyPageButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      const markdown = getMarkdown()
      await navigator.clipboard.writeText(markdown)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }, [getMarkdown])

  return (
    <button
      onClick={handleCopy}
      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
      title="LLMs用にMarkdownでページをコピー"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-green-500" />
          <span className="text-green-600">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>ページをコピー</span>
        </>
      )}
    </button>
  )
}
