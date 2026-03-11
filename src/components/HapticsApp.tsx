'use client'

import { useState, useCallback } from 'react'
import { PATTERNS, type PatternDef } from '@/lib/patterns'
import { TABS, CAT_LABELS } from '@/lib/tabs'
import { useAudio } from '@/hooks/useAudio'
import { useHaptics } from '@/hooks/useHaptics'
import { useToast } from '@/hooks/useToast'
import Header from './Header'
import TabBar from './TabBar'
import PatternGrid from './PatternGrid'
import Toast from './Toast'

export default function HapticsApp() {
  const [muted, setMuted] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  const [fading, setFading] = useState(false)

  const { play } = useAudio()
  const { trigger } = useHaptics()
  const { toast, showToast } = useToast()

  const fire = useCallback(async (pattern: PatternDef) => {
    trigger(pattern)
    if (!muted) await play(pattern.id)
    showToast(pattern.name, pattern.accent)
  }, [muted, play, trigger, showToast])

  const switchTab = useCallback(async (id: string) => {
    if (id === activeTab) return
    setFading(true)
    await new Promise(r => setTimeout(r, 140))
    setActiveTab(id)
    setFading(false)
  }, [activeTab])

  const visiblePatterns = activeTab === 'all'
    ? PATTERNS
    : PATTERNS.filter(p => p.cat === activeTab)

  return (
    <main
      style={{
        maxWidth: 430,
        margin: '0 auto',
        minHeight: '100dvh',
        paddingTop: 'max(env(safe-area-inset-top), 52px)',
        paddingBottom: 'max(env(safe-area-inset-bottom), 80px)',
        background: '#000',
        color: '#fff',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      } as React.CSSProperties}
    >
      <Header muted={muted} onMuteToggle={() => setMuted(m => !m)} />
      <TabBar tabs={TABS} activeTab={activeTab} onTabChange={switchTab} />
      <PatternGrid
        patterns={visiblePatterns}
        activeTab={activeTab}
        fading={fading}
        onFire={fire}
        catLabels={CAT_LABELS}
        tabs={TABS}
      />
      <Toast toast={toast} />
    </main>
  )
}
