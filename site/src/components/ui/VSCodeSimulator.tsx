import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Square, ChevronRight, FileText, FolderOpen, Terminal as TerminalIcon, Sparkles } from 'lucide-react'

interface TerminalLine {
  readonly type: 'input' | 'output' | 'ai' | 'system' | 'file-create'
  readonly text: string
  readonly delay?: number
}

interface VSCodeSimulatorProps {
  readonly lines: readonly TerminalLine[]
  readonly title?: string
  readonly files?: readonly string[]
  readonly autoPlay?: boolean
  readonly activeFile?: string
}

export function VSCodeSimulator({
  lines,
  title = 'Claude Code',
  files = ['manifest.md', 'CLAUDE.md', 'package.json', 'src/App.tsx'],
  autoPlay = true,
  activeFile = 'Terminal'
}: VSCodeSimulatorProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [started, setStarted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autoPlay || started) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [autoPlay, started])

  useEffect(() => {
    if (!started || visibleLines >= lines.length) return

    const line = lines[visibleLines]
    const delay = line.delay ?? (line.type === 'input' ? 800 : 200)

    if (line.type === 'input') {
      setIsTyping(true)
      let charIndex = 0
      const typeInterval = setInterval(() => {
        if (charIndex <= line.text.length) {
          setCurrentText(line.text.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)
          setTimeout(() => {
            setCurrentText('')
            setVisibleLines(prev => prev + 1)
          }, 400)
        }
      }, 35)
      return () => clearInterval(typeInterval)
    }

    const timer = setTimeout(() => {
      setVisibleLines(prev => prev + 1)
    }, delay)
    return () => clearTimeout(timer)
  }, [started, visibleLines, lines])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [visibleLines, currentText])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-gray-800/50 my-8"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 border-b border-[#333]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors" />
          </div>
          <span className="text-xs text-[#999] ml-2 font-mono">{title}</span>
        </div>
        <div className="flex items-center gap-3 text-[#666]">
          <Minus className="w-3.5 h-3.5" />
          <Square className="w-3 h-3" />
          <X className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="flex h-[420px]">
        {/* Sidebar - File Explorer */}
        <div className="w-48 bg-[#252526] border-r border-[#333] hidden md:block">
          <div className="px-3 py-2 text-[10px] font-bold text-[#888] uppercase tracking-widest">
            Explorer
          </div>
          <div className="px-2">
            <div className="flex items-center gap-1.5 px-2 py-1 text-[11px] text-[#ccc] rounded">
              <FolderOpen className="w-3.5 h-3.5 text-[#dcb67a]" />
              <span className="font-semibold">my-project</span>
            </div>
            {files.map((file) => (
              <div
                key={file}
                className={`flex items-center gap-1.5 px-4 py-1 text-[11px] rounded cursor-pointer transition-colors ${
                  file === 'CLAUDE.md' ? 'bg-[#37373d] text-white' : 'text-[#aaa] hover:bg-[#2a2d2e]'
                }`}
              >
                <FileText className="w-3 h-3 text-[#519aba]" />
                <span>{file}</span>
              </div>
            ))}
          </div>

          {/* Activity bar icons */}
          <div className="mt-6 px-3 py-2 text-[10px] font-bold text-[#888] uppercase tracking-widest">
            Claude Code
          </div>
          <div className="px-4 py-2">
            <div className="flex items-center gap-2 text-[11px] text-[#c084fc]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Assistant Active</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-[11px] text-[#4ade80]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              <span>Connected</span>
            </div>
          </div>
        </div>

        {/* Main area */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e]">
          {/* Tabs */}
          <div className="flex items-center bg-[#252526] border-b border-[#333]">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-[#1e1e1e] border-r border-[#333] text-[11px] text-white">
              <TerminalIcon className="w-3 h-3 text-[#89d185]" />
              {activeFile}
            </div>
            <div className="flex items-center gap-1.5 px-4 py-2 text-[11px] text-[#888] hover:text-[#ccc] cursor-pointer">
              <FileText className="w-3 h-3" />
              CLAUDE.md
            </div>
          </div>

          {/* Terminal area */}
          <div ref={terminalRef} className="flex-1 p-4 overflow-y-auto font-mono text-[13px] leading-6">
            {lines.slice(0, visibleLines).map((line, i) => (
              <AnimatePresence key={`${line.text}-${i}`}>
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-start gap-1"
                >
                  {line.type === 'input' && (
                    <div className="flex items-center gap-1">
                      <span className="text-[#4ade80]">$</span>
                      <span className="text-[#e4e4e4]">{line.text}</span>
                    </div>
                  )}
                  {line.type === 'output' && (
                    <span className="text-[#999]">{line.text}</span>
                  )}
                  {line.type === 'ai' && (
                    <div className="flex items-start gap-2">
                      <span className="text-[#c084fc] shrink-0">Claude</span>
                      <span className="text-[#e4e4e4]">{line.text}</span>
                    </div>
                  )}
                  {line.type === 'system' && (
                    <span className="text-[#569cd6]">{line.text}</span>
                  )}
                  {line.type === 'file-create' && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#4ade80]">+</span>
                      <span className="text-[#89d185]">{line.text}</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            ))}

            {/* Currently typing line */}
            {isTyping && (
              <div className="flex items-center gap-1">
                <span className="text-[#4ade80]">$</span>
                <span className="text-[#e4e4e4]">{currentText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block w-2 h-4 bg-[#e4e4e4] ml-0.5"
                />
              </div>
            )}

            {/* Idle cursor */}
            {!isTyping && visibleLines >= lines.length && (
              <div className="flex items-center gap-1">
                <span className="text-[#4ade80]">$</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block w-2 h-4 bg-[#e4e4e4]"
                />
              </div>
            )}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-3 py-1 bg-[#007acc] text-white text-[10px]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3" /> main
              </span>
              <span>UTF-8</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Claude Code v1.0
              </span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const demoLines: readonly TerminalLine[] = [
  { type: 'input', text: 'claude' },
  { type: 'system', text: 'Claude Code v1.0.12 - Type your request...', delay: 300 },
  { type: 'input', text: 'manifest.md と CLAUDE.md を読んで、最小構成で実装してください' },
  { type: 'ai', text: 'manifest.md と CLAUDE.md を読み込みました。', delay: 600 },
  { type: 'ai', text: 'React + TypeScript + Tailwind CSS で構成します。', delay: 400 },
  { type: 'output', text: '', delay: 200 },
  { type: 'file-create', text: 'Created: package.json', delay: 300 },
  { type: 'file-create', text: 'Created: src/App.tsx', delay: 200 },
  { type: 'file-create', text: 'Created: src/components/Header.tsx', delay: 200 },
  { type: 'file-create', text: 'Created: src/components/Dashboard.tsx', delay: 200 },
  { type: 'file-create', text: 'Created: src/index.css', delay: 200 },
  { type: 'output', text: '', delay: 200 },
  { type: 'ai', text: 'npm install を実行します...', delay: 500 },
  { type: 'output', text: 'added 247 packages in 8.3s', delay: 800 },
  { type: 'output', text: '', delay: 200 },
  { type: 'ai', text: '開発サーバーを起動します。', delay: 400 },
  { type: 'system', text: 'VITE v6.0.0 ready in 186ms', delay: 600 },
  { type: 'system', text: 'Local: http://localhost:5173/', delay: 200 },
  { type: 'output', text: '', delay: 200 },
  { type: 'ai', text: '実装が完了しました。localhost:5173 で確認してください。', delay: 400 },
]

export const feedbackLines: readonly TerminalLine[] = [
  { type: 'input', text: 'ヘッダーの色をもう少し濃い青にして、ロゴを左寄せにしてください' },
  { type: 'ai', text: 'ヘッダーのスタイルを調整します。', delay: 500 },
  { type: 'output', text: 'Modified: src/components/Header.tsx', delay: 300 },
  { type: 'ai', text: '背景色を #1a365d に変更し、ロゴを左寄せにしました。', delay: 400 },
  { type: 'output', text: '', delay: 200 },
  { type: 'input', text: 'ダッシュボードにカード型のデータ表示を追加して。CSVデータを使って' },
  { type: 'ai', text: 'assets/data.csv を読み込みます...', delay: 600 },
  { type: 'ai', text: 'CSVを解析し、カードコンポーネントを生成します。', delay: 500 },
  { type: 'file-create', text: 'Created: src/components/DataCard.tsx', delay: 300 },
  { type: 'output', text: 'Modified: src/components/Dashboard.tsx', delay: 200 },
  { type: 'ai', text: 'データカードを追加しました。ホットリロードで反映されています。', delay: 400 },
]

export const githubLines: readonly TerminalLine[] = [
  { type: 'input', text: '変更内容を要約してコミットしてください' },
  { type: 'ai', text: '変更を分析しています...', delay: 600 },
  { type: 'output', text: '3 files changed, 127 insertions(+), 12 deletions(-)', delay: 400 },
  { type: 'ai', text: 'コミットメッセージを作成します。', delay: 400 },
  { type: 'system', text: 'feat: add dashboard with data cards and responsive header', delay: 300 },
  { type: 'output', text: '[main abc1234] feat: add dashboard with data cards', delay: 300 },
  { type: 'output', text: '', delay: 200 },
  { type: 'input', text: 'GitHubにPull Requestを出してください' },
  { type: 'ai', text: 'リモートリポジトリにプッシュしてPRを作成します。', delay: 500 },
  { type: 'output', text: 'Enumerating objects: 12, done.', delay: 300 },
  { type: 'output', text: 'remote: Resolving deltas: 3, done.', delay: 200 },
  { type: 'system', text: 'https://github.com/user/my-project/pull/1', delay: 400 },
  { type: 'ai', text: 'PR #1 を作成しました。', delay: 300 },
]
