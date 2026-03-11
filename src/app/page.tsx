'use client'

import dynamic from 'next/dynamic'

/**
 * In Next.js 16, ssr: false must live in a CLIENT component.
 * The dynamic import still prevents HapticsApp (Tone.js / Web Audio)
 * from executing during SSR — only the client receives it.
 */
const HapticsApp = dynamic(() => import('@/components/HapticsApp'), {
  ssr: false,
  loading: () => (
    <main
      style={{
        maxWidth: 430,
        margin: '0 auto',
        minHeight: '100dvh',
        paddingTop: 'max(env(safe-area-inset-top), 52px)',
        background: '#000',
      }}
    />
  ),
})

export default function Page() {
  return <HapticsApp />
}
