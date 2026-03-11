'use client'

import { useState, useRef, useCallback } from 'react'

export interface ToastState {
  name: string
  accent: string
  visible: boolean
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({ name: '', accent: '#fff', visible: false })
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = useCallback((name: string, accent: string) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setToast({ name, accent, visible: true })
    timerRef.current = setTimeout(() => {
      setToast(t => ({ ...t, visible: false }))
    }, 1400)
  }, [])

  return { toast, showToast }
}
