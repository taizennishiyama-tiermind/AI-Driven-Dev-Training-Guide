import { motion } from 'framer-motion'
import { qaAvatars } from '../../data/illustrations'

interface QAItem {
  readonly q: string
  readonly a: string
}

interface QADialogueProps {
  readonly items: readonly QAItem[]
}

function getAvatar(pool: readonly string[], index: number): string {
  return pool[index % pool.length]
}

export function QADialogue({ items }: QADialogueProps) {
  return (
    <div className="my-8 space-y-5">
      {items.map((item, i) => (
        <motion.div
          key={item.q}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.35 }}
          className="space-y-3"
        >
          {/* Question */}
          <div className="flex gap-3 items-start">
            <div className="shrink-0 w-9 h-9 rounded-full bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center">
              <img
                src={getAvatar(qaAvatars.questioner, i)}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 bg-gray-50 rounded-2xl rounded-tl-sm px-4 py-2.5">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Question</span>
              <p className="text-sm font-semibold text-gray-800 leading-relaxed mt-0.5">{item.q}</p>
            </div>
          </div>
          {/* Answer */}
          <div className="flex gap-3 items-start pl-6">
            <div className="shrink-0 w-9 h-9 rounded-full bg-primary-50 border border-primary-100 overflow-hidden flex items-center justify-center">
              <img
                src={getAvatar(qaAvatars.answerer, i)}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 bg-primary-50/50 rounded-2xl rounded-tl-sm px-4 py-2.5">
              <span className="text-[9px] font-bold text-primary-400 uppercase tracking-widest">Answer</span>
              <p className="text-sm text-gray-700 leading-relaxed mt-0.5">{item.a}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
