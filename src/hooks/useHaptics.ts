'use client'

import { useCallback } from 'react'
import { fireHaptic } from '@/lib/haptics'
import type { PatternDef } from '@/lib/patterns'

export function useHaptics() {
  const trigger = useCallback((pattern: PatternDef) => {
    fireHaptic(pattern).catch(() => {
      // Haptics not available, silently ignore
    })
  }, [])

  return { trigger }
}
