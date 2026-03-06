import { motion } from 'framer-motion'
import { handsOnIllustration } from '../../data/illustrations'

interface HandsOnBlockProps {
  readonly description: string
}

export function HandsOnBlock({ description }: HandsOnBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="my-8 rounded-xl border border-dashed border-accent-400 bg-accent-50 overflow-hidden relative"
    >
      <div className="px-5 py-2.5 border-b border-accent-400/20">
        <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest">Hands-on</span>
      </div>
      <div className="p-5 pr-28 sm:pr-36">
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      </div>
      <motion.img
        src={handsOnIllustration}
        alt=""
        initial={{ opacity: 0, x: 20, rotate: -5 }}
        whileInView={{ opacity: 0.18, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute -right-2 -bottom-2 w-28 sm:w-36 h-auto pointer-events-none select-none"
      />
    </motion.div>
  )
}
