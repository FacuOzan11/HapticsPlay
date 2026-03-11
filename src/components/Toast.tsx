'use client'

import type { ToastState } from '@/hooks/useToast'

interface Props {
  toast: ToastState
}

export default function Toast({ toast }: Props) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'max(env(safe-area-inset-bottom), 28px)',
        left: '50%',
        transform: `translateX(-50%) translateY(${toast.visible ? '0' : '12px'})`,
        opacity: toast.visible ? 1 : 0,
        transition: 'opacity 0.2s ease, transform 0.25s ease',
        pointerEvents: 'none',
        background: 'rgba(28,28,30,0.88)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 100,
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 14,
        fontWeight: 500,
        color: '#fff',
        whiteSpace: 'nowrap',
        zIndex: 100,
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: toast.accent,
          flexShrink: 0,
          boxShadow: `0 0 6px ${toast.accent}`,
        }}
      />
      {toast.name}
    </div>
  )
}
