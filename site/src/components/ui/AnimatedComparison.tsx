import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, Check, Zap } from 'lucide-react'

const traditional = [
  { step: '要件定義書を作成', time: '2週間' },
  { step: '技術選定を議論', time: '1週間' },
  { step: '詳細設計書を作成', time: '2週間' },
  { step: '人がコードを書く', time: '4週間' },
  { step: 'レビュー・修正', time: '1週間' },
  { step: 'テスト', time: '1週間' },
]

const aiDriven = [
  { step: '願望・材料を伝える', time: '30分' },
  { step: 'AIが実装', time: '5分' },
  { step: '触って確認', time: '10分' },
  { step: 'フィードバック→修正', time: '15分' },
  { step: '繰り返し（3~5回）', time: '1時間' },
  { step: 'デプロイ', time: '10分' },
]

export function AnimatedComparison() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [activeTab, setActiveTab] = useState<'traditional' | 'ai'>('traditional')

  return (
    <div ref={ref} className="my-12">
      {/* Tab switcher */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-xl bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab('traditional')}
            className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'traditional' ? 'text-gray-900' : 'text-gray-700 hover:text-gray-800'
            }`}
          >
            {activeTab === 'traditional' && (
              <motion.div
                layoutId="comparison-tab"
                className="absolute inset-0 bg-white rounded-lg shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">従来の開発</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'ai' ? 'text-gray-900' : 'text-gray-700 hover:text-gray-800'
            }`}
          >
            {activeTab === 'ai' && (
              <motion.div
                layoutId="comparison-tab"
                className="absolute inset-0 bg-white rounded-lg shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              AI駆動開発
            </span>
          </button>
        </div>
      </div>

      {/* Side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Traditional */}
        <motion.div
          animate={{
            opacity: activeTab === 'traditional' ? 1 : 0.4,
            scale: activeTab === 'traditional' ? 1 : 0.97,
          }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border-2 border-red-200/60 bg-gradient-to-b from-red-50/50 to-white p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <X className="w-5 h-5 text-red-400" />
            <h3 className="font-bold text-gray-900">従来の開発</h3>
          </div>
          <div className="space-y-3">
            {traditional.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.35 }}
                className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-white/80 border border-red-100"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-[10px] font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-800">{item.step}</span>
                </div>
                <span className="text-xs font-mono font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full shrink-0">
                  {item.time}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-red-100 flex items-center justify-between">
            <span className="text-xs text-gray-700">合計</span>
            <span className="text-lg font-black text-red-500">~11週間</span>
          </div>
        </motion.div>

        {/* AI Driven */}
        <motion.div
          animate={{
            opacity: activeTab === 'ai' ? 1 : 0.4,
            scale: activeTab === 'ai' ? 1 : 0.97,
          }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border-2 border-green-200/60 bg-gradient-to-b from-green-50/50 to-white p-6 relative overflow-hidden"
        >
          {activeTab === 'ai' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 80% 20%, rgba(74, 222, 128, 0.08) 0%, transparent 50%)'
              }}
            />
          )}
          <div className="relative flex items-center gap-2 mb-4">
            <Check className="w-5 h-5 text-green-500" />
            <h3 className="font-bold text-gray-900">AI駆動開発</h3>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-auto text-xs font-bold text-green-600 bg-green-100 px-2.5 py-0.5 rounded-full"
            >
              10x faster
            </motion.span>
          </div>
          <div className="relative space-y-3">
            {aiDriven.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.35 }}
                className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-white/80 border border-green-100"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-800">{item.step}</span>
                </div>
                <span className="text-xs font-mono font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full shrink-0">
                  {item.time}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="relative mt-4 pt-3 border-t border-green-100 flex items-center justify-between">
            <span className="text-xs text-gray-700">合計</span>
            <span className="text-lg font-black text-green-600">~2時間</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
