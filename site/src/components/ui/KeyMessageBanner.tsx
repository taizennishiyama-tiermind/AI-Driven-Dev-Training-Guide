import { motion } from 'framer-motion'

interface KeyMessageBannerProps {
  readonly message: string
  readonly color?: string
}

export function KeyMessageBanner({ message }: KeyMessageBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="relative my-8 pl-5 border-l-2 border-primary-400"
    >
      <p className="text-lg font-bold text-gray-800 leading-relaxed">
        {message}
      </p>
    </motion.div>
  )
}
