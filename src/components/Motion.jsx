import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Fades/slides children in when they scroll into view.
 * Content is fully visible in the prerendered HTML; the hidden start state
 * only applies when <html class="js"> is set, so crawlers always see it.
 */
export function Reveal({ as: Tag = 'div', children, className = '', delay = 0, variant = 'up', style, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect() } },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${shown ? 'is-in' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms`, ...(style || {}) }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
