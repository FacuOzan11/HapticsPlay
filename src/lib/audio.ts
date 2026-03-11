/**
 * Tone.js sound map — one player function per pattern ID.
 * This file is ALWAYS lazy-imported (never at module load time)
 * to prevent SSR crashes in Next.js.
 */
type ToneModule = typeof import('tone')

type SoundPlayer = (Tone: ToneModule) => void

export const SOUND_PLAYERS: Record<string, SoundPlayer> = {
  // ── NOTIFICATION ───────────────────────────────────────────────────────────
  success: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.15, sustain: 0, release: 0.1 },
    }).toDestination()
    synth.volume.value = -6
    synth.triggerAttackRelease('C5', '16n')
    setTimeout(() => { synth.triggerAttackRelease('G5', '8n'); setTimeout(() => synth.dispose(), 500) }, 120)
  },

  warning: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.01, decay: 0.1, sustain: 0, release: 0.05 },
    }).toDestination()
    synth.volume.value = -8
    synth.triggerAttackRelease('E3', '16n')
    setTimeout(() => { synth.triggerAttackRelease('E3', '16n'); setTimeout(() => synth.dispose(), 400) }, 140)
  },

  error: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sawtooth' },
      envelope: { attack: 0.01, decay: 0.22, sustain: 0, release: 0.05 },
    }).toDestination()
    synth.volume.value = -10
    const now = T.now()
    synth.triggerAttack('G3', now)
    synth.frequency.exponentialRampTo(80, 0.25, now)
    synth.triggerRelease(now + 0.28)
    setTimeout(() => synth.dispose(), 500)
  },

  // ── IMPACT ─────────────────────────────────────────────────────────────────
  light: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.005, decay: 0.055, sustain: 0, release: 0.01 },
    }).toDestination()
    synth.volume.value = -8
    synth.triggerAttackRelease(3000, '32n')
    setTimeout(() => synth.dispose(), 200)
  },

  medium: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.005, decay: 0.085, sustain: 0, release: 0.01 },
    }).toDestination()
    synth.volume.value = -8
    synth.triggerAttackRelease(1200, '16n')
    setTimeout(() => synth.dispose(), 300)
  },

  heavy: (T) => {
    const synth = new T.MembraneSynth({
      pitchDecay: 0.08,
      octaves: 4,
      envelope: { attack: 0.002, decay: 0.2, sustain: 0, release: 0.1 },
    }).toDestination()
    synth.volume.value = -6
    synth.triggerAttackRelease('C2', '8n')
    setTimeout(() => synth.dispose(), 500)
  },

  soft: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.11, sustain: 0, release: 0.02 },
    }).toDestination()
    synth.volume.value = -14
    synth.triggerAttackRelease(700, '16n')
    setTimeout(() => synth.dispose(), 300)
  },

  rigid: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.001, decay: 0.065, sustain: 0, release: 0.005 },
    }).toDestination()
    synth.volume.value = -8
    synth.triggerAttackRelease(2400, '32n')
    setTimeout(() => synth.dispose(), 200)
  },

  // ── SELECTION ──────────────────────────────────────────────────────────────
  selection: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.001, decay: 0.028, sustain: 0, release: 0.005 },
    }).toDestination()
    synth.volume.value = -20
    synth.triggerAttackRelease(4500, '64n')
    setTimeout(() => synth.dispose(), 100)
  },

  nudge: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.005, decay: 0.09, sustain: 0, release: 0.01 },
    }).toDestination()
    synth.volume.value = -10
    synth.triggerAttackRelease(200, '16n')
    setTimeout(() => synth.dispose(), 300)
  },

  // ── PATTERNS ───────────────────────────────────────────────────────────────
  heartbeat: (T) => {
    const synth = new T.MembraneSynth({
      pitchDecay: 0.05, octaves: 3,
      envelope: { attack: 0.001, decay: 0.08, sustain: 0, release: 0.05 },
    }).toDestination()
    synth.volume.value = -6
    synth.triggerAttackRelease('A1', '16n')
    setTimeout(() => { synth.triggerAttackRelease('A1', '16n'); setTimeout(() => synth.dispose(), 400) }, 180)
  },

  double: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.005, decay: 0.07, sustain: 0, release: 0.01 },
    }).toDestination()
    synth.volume.value = -8
    synth.triggerAttackRelease(1200, '16n')
    setTimeout(() => { synth.triggerAttackRelease(1200, '16n'); setTimeout(() => synth.dispose(), 400) }, 150)
  },

  triple: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.005, decay: 0.065, sustain: 0, release: 0.01 },
    }).toDestination()
    synth.volume.value = -8;
    [0, 110, 220].forEach(ms => setTimeout(() => synth.triggerAttackRelease(1200, '32n'), ms))
    setTimeout(() => synth.dispose(), 500)
  },

  burst: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.001, decay: 0.012, sustain: 0, release: 0.002 },
    }).toDestination()
    synth.volume.value = -10;
    [0, 22, 44, 66, 88, 110].forEach(ms => setTimeout(() => synth.triggerAttackRelease(4000, '64n'), ms))
    setTimeout(() => synth.dispose(), 300)
  },

  long: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.38, sustain: 0.1, release: 0.1 },
    }).toDestination()
    synth.volume.value = -14
    synth.triggerAttackRelease(80, '4n')
    setTimeout(() => synth.dispose(), 700)
  },

  knock: (T) => {
    const synth = new T.MembraneSynth({
      pitchDecay: 0.06, octaves: 2,
      envelope: { attack: 0.001, decay: 0.075, sustain: 0, release: 0.03 },
    }).toDestination()
    synth.volume.value = -6;
    [0, 130, 260].forEach(ms => setTimeout(() => synth.triggerAttackRelease('D3', '16n'), ms))
    setTimeout(() => synth.dispose(), 600)
  },

  alert: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.01, decay: 0.1, sustain: 0, release: 0.03 },
    }).toDestination()
    synth.volume.value = -8
    synth.triggerAttackRelease('G4', '16n')
    setTimeout(() => synth.triggerAttackRelease('G4', '16n'), 170)
    setTimeout(() => { synth.triggerAttackRelease('B4', '8n'); setTimeout(() => synth.dispose(), 500) }, 330)
  },

  ping: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.001, decay: 0.05, sustain: 0, release: 0.005 },
    }).toDestination()
    synth.volume.value = -10
    synth.triggerAttackRelease(3500, '64n')
    setTimeout(() => synth.dispose(), 150)
  },

  sos: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.005, decay: 0.05, sustain: 0.3, release: 0.03 },
    }).toDestination()
    synth.volume.value = -8
    // ...  ---  ...
    ;[0, 90, 180].forEach(ms => setTimeout(() => synth.triggerAttackRelease('G5', '32n'), ms))
    ;[330, 480, 630].forEach(ms => setTimeout(() => synth.triggerAttackRelease('G5', '16n'), ms))
    ;[820, 910, 1000].forEach(ms => setTimeout(() => synth.triggerAttackRelease('G5', '32n'), ms))
    setTimeout(() => synth.dispose(), 1300)
  },

  drumroll: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.002, decay: 0.035, sustain: 0, release: 0.008 },
    }).toDestination()
    const kick = new T.MembraneSynth().toDestination()
    kick.volume.value = -6;
    [0, 55, 105, 148, 185, 217, 244].forEach((ms, i) => {
      setTimeout(() => {
        synth.volume.value = -15 + i * 2
        synth.triggerAttackRelease(1400, '32n')
      }, ms)
    })
    setTimeout(() => {
      kick.triggerAttackRelease('C2', '8n')
      setTimeout(() => { synth.dispose(); kick.dispose() }, 400)
    }, 300)
  },

  wave: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.28, sustain: 0.2, release: 0.1 },
    }).toDestination()
    synth.volume.value = -10
    const now = T.now()
    synth.triggerAttack(150, now)
    synth.frequency.exponentialRampTo(1200, 0.30, now)
    synth.triggerRelease(now + 0.32)
    setTimeout(() => synth.dispose(), 600)
  },

  stutter: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.001, decay: 0.01, sustain: 0, release: 0.002 },
    }).toDestination()
    synth.volume.value = -10;
    [0, 18, 36, 54, 72].forEach(ms => setTimeout(() => synth.triggerAttackRelease(3800, '64n'), ms))
    setTimeout(() => synth.dispose(), 250)
  },

  countdown: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.08, sustain: 0, release: 0.03 },
    }).toDestination()
    synth.volume.value = -8
    synth.triggerAttackRelease('D5', '16n')
    setTimeout(() => synth.triggerAttackRelease('A4', '16n'), 200)
    setTimeout(() => { synth.triggerAttackRelease('D4', '8n'); setTimeout(() => synth.dispose(), 600) }, 400)
  },

  buzz: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'square' },
      envelope: { attack: 0.002, decay: 0.045, sustain: 0, release: 0.01 },
    }).toDestination()
    synth.volume.value = -18;
    [0, 70, 140].forEach(ms => setTimeout(() => synth.triggerAttackRelease(85, '32n'), ms))
    setTimeout(() => synth.dispose(), 400)
  },

  // ── EXTRA ──────────────────────────────────────────────────────────────────
  tick: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.001, decay: 0.022, sustain: 0, release: 0.003 },
    }).toDestination()
    synth.volume.value = -22
    synth.triggerAttackRelease(5000, '64n')
    setTimeout(() => synth.dispose(), 100)
  },

  thud: (T) => {
    const synth = new T.MembraneSynth({
      pitchDecay: 0.09, octaves: 4,
      envelope: { attack: 0.002, decay: 0.28, sustain: 0, release: 0.05 },
    }).toDestination()
    synth.volume.value = -6
    synth.triggerAttackRelease('A1', '8n')
    setTimeout(() => synth.dispose(), 600)
  },

  zap: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sawtooth' },
      envelope: { attack: 0.001, decay: 0.11, sustain: 0, release: 0.02 },
    }).toDestination()
    synth.volume.value = -10
    const now = T.now()
    synth.triggerAttack(1200, now)
    synth.frequency.exponentialRampTo(80, 0.12, now)
    synth.triggerRelease(now + 0.14)
    setTimeout(() => synth.dispose(), 300)
  },

  confirm: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.12, sustain: 0, release: 0.05 },
    }).toDestination()
    synth.volume.value = -8
    synth.triggerAttackRelease('A4', '8n')
    setTimeout(() => { synth.triggerAttackRelease('C5', '8n'); setTimeout(() => synth.dispose(), 500) }, 120)
  },

  denied: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.01, decay: 0.12, sustain: 0, release: 0.05 },
    }).toDestination()
    synth.volume.value = -8
    synth.triggerAttackRelease('E4', '8n')
    setTimeout(() => { synth.triggerAttackRelease('A3', '8n'); setTimeout(() => synth.dispose(), 500) }, 140)
  },

  pulse: (T) => {
    const synth = new T.MembraneSynth({
      pitchDecay: 0.07, octaves: 3,
      envelope: { attack: 0.002, decay: 0.12, sustain: 0, release: 0.05 },
    }).toDestination()
    synth.volume.value = -6
    synth.triggerAttackRelease('C2', '16n')
    setTimeout(() => { synth.triggerAttackRelease('C2', '16n'); setTimeout(() => synth.dispose(), 1300) }, 900)
  },

  glitch: (T) => {
    const freqs = [2400, 1800, 3200, 900, 4000, 1500]
    freqs.forEach((f, i) => {
      const s = new T.Synth({
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.001, decay: 0.012, sustain: 0, release: 0.003 },
      }).toDestination()
      s.volume.value = -22
      setTimeout(() => { s.triggerAttackRelease(f, '64n'); setTimeout(() => s.dispose(), 100) }, i * 22)
    })
  },

  tada: (T) => {
    const synth = new T.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.12, sustain: 0, release: 0.05 },
    }).toDestination()
    synth.volume.value = -6
    ;([[0, 'C5'], [100, 'E5'], [200, 'G5'], [320, 'C6']] as [number, string][]).forEach(([ms, note]) => {
      setTimeout(() => synth.triggerAttackRelease(note, '8n'), ms)
    })
    setTimeout(() => synth.dispose(), 800)
  },
}
