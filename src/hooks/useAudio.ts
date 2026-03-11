'use client'

import { useRef, useCallback } from 'react'

export function useAudio() {
  const toneRef = useRef<typeof import('tone') | null>(null)
  const playersRef = useRef<Record<string, (T: typeof import('tone')) => void> | null>(null)
  const startedRef = useRef(false)

  const init = useCallback(async () => {
    if (startedRef.current) return
    const [Tone, { SOUND_PLAYERS }] = await Promise.all([
      import('tone'),
      import('@/lib/audio'),
    ])
    // Tone.start() unlocks AudioContext — must be called inside a user gesture
    await Tone.start()
    toneRef.current = Tone
    playersRef.current = SOUND_PLAYERS
    startedRef.current = true
  }, [])

  const play = useCallback(async (patternId: string) => {
    try {
      await init()
      const player = playersRef.current?.[patternId]
      if (player && toneRef.current) {
        player(toneRef.current)
      }
    } catch {
      // Audio not available (e.g. browser policy), silently ignore
    }
  }, [init])

  return { play }
}
