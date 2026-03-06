import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface AnimatedCounterProps {
  readonly value: number
  readonly suffix?: string
  readonly prefix?: string
  readonly label: string
  readonly description: string
  readonly color: string
  readonly duration?: number
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  description,
  duration = 2
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [displayValue, setDisplayValue] = useState(0)

  const spring = useSpring(0, { duration: duration * 1000 })
  const rounded = useTransform(spring, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      setDisplayValue(v)
    })
    return unsubscribe
  }, [rounded])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-xl border border-gray-200 bg-white"
    >
      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
        {label}
      </div>
      <div className="text-2xl font-black text-gray-900 tabular-nums">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-xs text-gray-400 mt-0.5">{description}</div>
    </motion.div>
  )
}
