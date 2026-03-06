import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { Section } from '../../data/chapters'

interface SectionRendererProps {
  readonly section: Section
  readonly index: number
}

function renderMarkdown(text: string) {
  const lines = text.split('\n')
  const elements: ReactNode[] = []
  let tableRows: string[][] = []
  let inTable = false
  let skipNext = false

  for (let i = 0; i < lines.length; i++) {
    if (skipNext) {
      skipNext = false
      continue
    }

    const line = lines[i]

    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      const cells = line.split('|').filter(Boolean).map(c => c.trim())
      if (lines[i + 1]?.match(/^\|[\s-|]+\|$/)) {
        tableRows = [cells]
        inTable = true
        skipNext = true
        continue
      }
      if (inTable) {
        tableRows.push(cells)
        if (i === lines.length - 1 || !lines[i + 1]?.trim().startsWith('|')) {
          elements.push(
            <div key={`table-${i}`} className="my-4 rounded-xl border border-gray-200 overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {tableRows[0].map((h, hi) => (
                      <th key={hi} className="text-left px-4 py-2.5 font-semibold text-gray-800 border-b border-gray-200">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.slice(1).map((row, ri) => (
                    <tr key={ri} className={ri < tableRows.length - 2 ? 'border-b border-gray-100' : ''}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-4 py-2.5 text-gray-700">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
          inTable = false
          tableRows = []
        }
        continue
      }
    }

    if (line.startsWith('#### ')) {
      const numberedWithSub = line.match(/^#### (\d+)\.\s+(.+?)[（(](.+?)[）)]$/)
      const numberedOnly = !numberedWithSub && line.match(/^#### (\d+)\.\s+(.+)$/)
      if (numberedWithSub) {
        const [, num, title, sub] = numberedWithSub
        elements.push(
          <div key={i} className="flex items-baseline gap-2.5 mt-5 mb-1.5 pb-1.5 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-500 bg-gray-100 w-5 h-5 rounded flex items-center justify-center shrink-0">{num}</span>
            <span className="text-[15px] font-semibold text-gray-800 leading-[1.52] tracking-[0.01em]">{title}<span className="text-sm font-normal text-gray-500 ml-1.5">({sub})</span></span>
          </div>
        )
      } else if (numberedOnly) {
        const [, num, title] = numberedOnly
        elements.push(
          <div key={i} className="flex items-baseline gap-2.5 mt-5 mb-1.5 pb-1.5 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-500 bg-gray-100 w-5 h-5 rounded flex items-center justify-center shrink-0">{num}</span>
            <span className="text-[15px] font-semibold text-gray-800 leading-[1.52] tracking-[0.01em]">{title}</span>
          </div>
        )
      } else {
        elements.push(<h4 key={i} className="text-[16px] font-bold text-gray-900 leading-[1.52] tracking-[0.01em] mt-6 mb-2">{line.slice(5)}</h4>)
      }
    } else if (line.startsWith('- **') && line.includes('**')) {
      const match = line.match(/^- \*\*(.+?)\*\*\s*[—-]\s*(.+)$/)
      if (match) {
        elements.push(
          <div key={i} className="flex gap-2 ml-1 mb-1.5">
            <span className="text-primary-400 mt-1 shrink-0">&#x2022;</span>
            <span className="text-sm text-gray-800"><strong className="text-gray-900">{match[1]}</strong> — {match[2]}</span>
          </div>
        )
      } else {
        const boldMatch = line.match(/^- \*\*(.+?)\*\*(.*)$/)
        if (boldMatch) {
          elements.push(
            <div key={i} className="flex gap-2 ml-1 mb-1.5">
              <span className="text-primary-400 mt-1 shrink-0">&#x2022;</span>
              <span className="text-sm text-gray-800"><strong className="text-gray-900">{boldMatch[1]}</strong>{boldMatch[2]}</span>
            </div>
          )
        }
      }
    } else if (line.startsWith('- ')) {
      const content = line.slice(2)
      elements.push(
        <div key={i} className="flex gap-2 ml-1 mb-1.5">
          <span className="text-primary-400 mt-1 shrink-0">&#x2022;</span>
          <span className="text-sm text-gray-800" dangerouslySetInnerHTML={{
            __html: content
              .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
              .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-gray-100 text-primary-600 text-xs font-mono">$1</code>')
          }} />
        </div>
      )
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="h-3" />)
    } else {
      elements.push(
        <p key={i} className="text-[14px] text-gray-800 leading-[1.5em] mb-2" dangerouslySetInnerHTML={{
          __html: line
            .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
            .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-gray-100 text-primary-600 text-xs font-mono">$1</code>')
        }} />
      )
    }
  }

  return elements
}

export function SectionRenderer({ section, index }: SectionRendererProps) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="mb-10"
    >
      <h3 className="text-[20px] sm:text-[22px] font-bold text-gray-900 leading-[1.52] tracking-[0.01em] mb-4 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-sm font-bold shrink-0">
          {index + 1}
        </span>
        {section.title}
      </h3>
      <div className="pl-0 lg:pl-10">
        {renderMarkdown(section.content)}
      </div>
    </motion.section>
  )
}
