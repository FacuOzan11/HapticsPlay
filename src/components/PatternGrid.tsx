'use client'

import type { PatternDef, PatternCategory } from '@/lib/patterns'
import type { TabDef } from '@/lib/tabs'
import PatternButton from './PatternButton'
import SelectionSlider from './SelectionSlider'

interface Props {
  patterns: PatternDef[]
  activeTab: string
  fading: boolean
  onFire: (pattern: PatternDef) => void
  catLabels: Record<PatternCategory, string>
  tabs: TabDef[]
}

const SECTION_LABEL_STYLE: React.CSSProperties = {
  fontSize: 10.5,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.35)',
  marginBottom: 10,
  marginTop: 24,
}

const TWO_COL: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 8,
}

const ONE_COL: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
}

export default function PatternGrid({ patterns, activeTab, fading, onFire, catLabels }: Props) {
  const selectionPattern = patterns.find(p => p.id === 'selection')
  const nonSelectionPatterns = patterns.filter(p => p.id !== 'selection')

  const renderCategory = (cat: PatternCategory, pats: PatternDef[]) => {
    if (pats.length === 0) return null
    const useFullWidth = cat === 'notification'

    return (
      <div key={cat}>
        {activeTab === 'all' && (
          <div style={SECTION_LABEL_STYLE}>{catLabels[cat]}</div>
        )}

        {cat === 'selection' ? (
          <div style={ONE_COL}>
            {selectionPattern && (
              <SelectionSlider pattern={selectionPattern} onFire={onFire} />
            )}
            {pats.filter(p => p.id !== 'selection').map(p => (
              <PatternButton key={p.id} pattern={p} onFire={onFire} />
            ))}
          </div>
        ) : useFullWidth ? (
          <div style={ONE_COL}>
            {pats.map(p => <PatternButton key={p.id} pattern={p} onFire={onFire} />)}
          </div>
        ) : (
          <div style={TWO_COL}>
            {pats.map(p => <PatternButton key={p.id} pattern={p} onFire={onFire} />)}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      style={{
        padding: '0 20px',
        opacity: fading ? 0 : 1,
        transform: `translateY(${fading ? '8px' : '0'})`,
        transition: 'opacity 0.14s ease, transform 0.14s ease',
      }}
    >
      {activeTab === 'all' ? (
        // Group by category in "All" tab
        (['notification', 'impact', 'selection', 'pattern', 'extra'] as PatternCategory[]).map(cat => {
          const pats = patterns.filter(p => p.cat === cat)
          return renderCategory(cat, pats)
        })
      ) : activeTab === 'selection' ? (
        renderCategory('selection', nonSelectionPatterns)
      ) : (
        renderCategory(activeTab as PatternCategory, patterns)
      )}
    </div>
  )
}
