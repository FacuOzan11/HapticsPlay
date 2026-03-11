'use client'

import { useState, useCallback } from 'react'
import type { PatternDef } from '@/lib/patterns'

interface Props {
  pattern: PatternDef
  onFire: (pattern: PatternDef) => void
}

export default function PatternButton({ pattern, onFire }: Props) {
  const [fired, setFired] = useState(false)

  const handleClick = useCallback(() => {
    onFire(pattern)
    setFired(true)
    setTimeout(() => setFired(false), 300)
  }, [onFire, pattern])

  const full = pattern.full ?? false

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: full ? 'row' : 'column',
        alignItems: full ? 'center' : 'flex-start',
        gap: full ? 14 : 0,
        padding: full ? '16px 18px' : '15px 16px 17px',
        background: 'rgba(255,255,255,0.055)',
        border: `1px solid ${fired
          ? `color-mix(in srgb, ${pattern.accent} 45%, transparent)`
          : 'rgba(255,255,255,0.09)'}`,
        borderRadius: 16,
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        overflow: 'hidden',
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
        transition: 'border-color 0.15s ease',
        color: '#fff',
        fontFamily: 'inherit',
      }}
    >
      {/* Flash overlay */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          background: pattern.accent,
          opacity: fired ? 0.13 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Accent dot */}
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: pattern.accent,
          flexShrink: 0,
          marginBottom: full ? 0 : 10,
          position: 'relative',
        }}
      />

      {full ? (
        <span style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <span style={{ fontSize: 15, fontWeight: 500, lineHeight: 1 }}>{pattern.name}</span>
          {pattern.desc && (
            <span style={{ fontSize: 11, marginTop: 3, lineHeight: 1.4, color: 'rgba(255,255,255,0.32)' }}>
              {pattern.desc}
            </span>
          )}
        </span>
      ) : (
        <>
          <span style={{ fontSize: 14, fontWeight: 500, lineHeight: 1, position: 'relative' }}>
            {pattern.name}
          </span>
          {pattern.desc && (
            <span style={{ fontSize: 11, marginTop: 4, lineHeight: 1.4, color: 'rgba(255,255,255,0.32)', position: 'relative' }}>
              {pattern.desc}
            </span>
          )}
        </>
      )}
    </button>
  )
}
