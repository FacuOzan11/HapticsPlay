'use client'

import { useState, useRef, useCallback } from 'react'
import type { PatternDef } from '@/lib/patterns'

interface Props {
  pattern: PatternDef
  onFire: (pattern: PatternDef) => void
}

export default function SelectionSlider({ pattern, onFire }: Props) {
  const [value, setValue] = useState(5)
  const prevRef = useRef(5)

  const pct = ((value - 1) / 9 * 100).toFixed(1) + '%'

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const cur = Number(e.target.value)
    setValue(cur)
    if (cur !== prevRef.current) {
      onFire(pattern)
      prevRef.current = cur
    }
  }, [onFire, pattern])

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.055)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: 16,
        padding: '16px 18px 22px',
        marginBottom: 8,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: pattern.accent, marginBottom: 10 }} />
          <div style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>Selection slider</div>
          <div style={{ fontSize: 11, marginTop: 3, color: 'rgba(255,255,255,0.32)' }}>
            Picker · stepper · detent
          </div>
        </div>
        <span style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-1px', color: '#fff', lineHeight: 1, tabularNums: 'true' } as React.CSSProperties}>
          {value}
        </span>
      </div>

      <input
        type="range"
        min={1}
        max={10}
        step={1}
        value={value}
        onChange={handleChange}
        // Both events for iOS Safari compatibility
        onInput={handleChange as unknown as React.FormEventHandler<HTMLInputElement>}
        style={{ '--pct': pct } as React.CSSProperties}
      />
    </div>
  )
}
