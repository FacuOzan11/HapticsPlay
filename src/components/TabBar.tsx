'use client'

import type { TabDef } from '@/lib/tabs'

interface Props {
  tabs: TabDef[]
  activeTab: string
  onTabChange: (id: string) => void
}

export default function TabBar({ tabs, activeTab, onTabChange }: Props) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'linear-gradient(#000 80%, transparent)',
        paddingBottom: 16,
      }}
    >
      {/* Right-side fade gradient to indicate more tabs */}
      <div
        style={{
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 6,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            padding: '0 20px',
            WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
            msOverflowStyle: 'none',
          } as React.CSSProperties}
        >
          {tabs.map(tab => {
            const active = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                style={{
                  flexShrink: 0,
                  padding: '7px 14px',
                  borderRadius: 100,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s ease, color 0.2s ease',
                  background: active ? '#fff' : 'rgba(255,255,255,0.1)',
                  color: active ? '#000' : 'rgba(255,255,255,0.65)',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
        {/* Right fade */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 48,
            background: 'linear-gradient(to right, transparent, #000 85%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}

// Suppress TypeScript warning for WebkitOverflowScrolling
declare module 'react' {
  interface CSSProperties {
    WebkitOverflowScrolling?: string
    msOverflowStyle?: string
  }
}
