import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { num: '01', label: '材料を渡す', detail: '願望・前提・制約・参考データを音声入力やファイルで伝える' },
  { num: '02', label: 'AIが実装', detail: 'Claude Codeがゼロからプロジェクトを構築する' },
  { num: '03', label: 'localhost確認', detail: 'ブラウザで実際に触って動作を確かめる' },
  { num: '04', label: 'フィードバック', detail: '「この色を変えて」「ボタンを大きく」など具体的に伝える' },
  { num: '05', label: '反復改善', detail: '3〜4を何度でも繰り返す。AIは修正の反復に強い' },
  { num: '06', label: 'デプロイ', detail: 'Vercel / GitHub Pagesで公開。PRも自動作成' },
]

export function FlowDiagram() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {steps.map((step, i) => {
          const isLoop = i >= 2 && i <= 4
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-4 rounded-xl border transition-colors ${
                isLoop
                  ? 'border-primary-200 bg-primary-50/40'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`shrink-0 text-2xl font-black tabular-nums leading-none ${
                  isLoop ? 'text-primary-300' : 'text-gray-200'
                }`}>
                  {step.num}
                </span>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 mb-0.5">{step.label}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.detail}</p>
                </div>
              </div>
              {isLoop && i === 2 && (
                <div className="absolute -top-2 right-3 text-[9px] font-bold text-primary-500 bg-primary-50 border border-primary-200 px-2 py-0.5 rounded-full">
                  LOOP
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Loop annotation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-3 text-center"
      >
        <span className="text-xs text-gray-400">
          Step 3〜5 を繰り返す -- 見ながら育てるのがAI駆動開発の基本
        </span>
      </motion.div>
    </div>
  )
}
