'use client'

interface Props {
  muted: boolean
  onMuteToggle: () => void
}

const SpeakerOn = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
)

const SpeakerOff = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
)

export default function Header({ muted, onMuteToggle }: Props) {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '0 20px',
        marginBottom: 28,
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#30d158',
              boxShadow: '0 0 0 2px rgba(48,209,88,0.25)',
              display: 'inline-block',
            }}
          />
          <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Haptics
          </span>
        </div>
        <h1
          style={{
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: '-2px',
            lineHeight: 1,
            margin: 0,
            color: '#fff',
          }}
        >
          Playground
        </h1>
      </div>

      <button
        onClick={onMuteToggle}
        aria-label={muted ? 'Unmute sounds' : 'Mute sounds'}
        style={{
          marginTop: 6,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12,
          width: 42,
          height: 42,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: muted ? 'rgba(255,255,255,0.3)' : '#fff',
          transition: 'color 0.15s ease, background 0.15s ease',
          WebkitTapHighlightColor: 'transparent',
          flexShrink: 0,
        }}
      >
        {muted ? <SpeakerOff /> : <SpeakerOn />}
      </button>
    </header>
  )
}
