import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    startTimeRef.current = null

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
      }

      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Easing function: easeOut
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const newCount = Math.floor(target * easeProgress)

      setCount(newCount)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [target, duration])

  return count
}
