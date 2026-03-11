export type PatternCategory =
  | 'notification'
  | 'impact'
  | 'selection'
  | 'pattern'
  | 'extra'

export interface PatternDef {
  id: string
  cat: PatternCategory
  name: string
  accent: string
  desc: string
  full?: boolean
  hapticKey?: string
  vibratePattern?: number[]
  iosHapticStyle?: 'single' | 'confirm' | 'error'
}

export const PATTERNS: PatternDef[] = [
  // ── NOTIFICATION ─────────────────────────────────────────────────────────
  {
    id: 'success', cat: 'notification', name: 'Success', accent: '#30d158', full: true,
    desc: 'Form saved · payment confirmed · upload complete',
    hapticKey: 'success', iosHapticStyle: 'confirm',
  },
  {
    id: 'warning', cat: 'notification', name: 'Warning', accent: '#ffd60a', full: true,
    desc: 'Destructive action ahead · approaching a limit',
    hapticKey: 'warning', iosHapticStyle: 'single',
  },
  {
    id: 'error', cat: 'notification', name: 'Error', accent: '#ff453a', full: true,
    desc: 'Validation failure · network error · denied',
    hapticKey: 'error', iosHapticStyle: 'error',
  },

  // ── IMPACT ────────────────────────────────────────────────────────────────
  {
    id: 'light', cat: 'impact', name: 'Light', accent: '#64d2ff',
    desc: 'Subtle tap · toggle',
    hapticKey: 'light', iosHapticStyle: 'single',
  },
  {
    id: 'medium', cat: 'impact', name: 'Medium', accent: '#0a84ff',
    desc: 'Button press · card snap',
    hapticKey: 'medium', iosHapticStyle: 'single',
  },
  {
    id: 'heavy', cat: 'impact', name: 'Heavy', accent: '#bf5af2',
    desc: 'Major state change · force press',
    hapticKey: 'heavy', iosHapticStyle: 'single',
  },
  {
    id: 'soft', cat: 'impact', name: 'Soft', accent: '#ffd60a',
    desc: 'Featherlight touch',
    hapticKey: 'soft', iosHapticStyle: 'single',
  },
  {
    id: 'rigid', cat: 'impact', name: 'Rigid', accent: '#ff9f0a',
    desc: 'Sharp · rigid impact',
    hapticKey: 'rigid', iosHapticStyle: 'single',
  },

  // ── SELECTION ─────────────────────────────────────────────────────────────
  {
    id: 'selection', cat: 'selection', name: 'Selection', accent: '#e5e5ea',
    desc: 'Picker · stepper · detent',
    hapticKey: 'selection', iosHapticStyle: 'single',
  },
  {
    id: 'nudge', cat: 'selection', name: 'Nudge', accent: '#32ade6',
    desc: 'Gentle direction hint',
    hapticKey: 'nudge', iosHapticStyle: 'single',
  },

  // ── PATTERNS ──────────────────────────────────────────────────────────────
  {
    id: 'heartbeat', cat: 'pattern', name: 'Heartbeat', accent: '#ff375f',
    desc: 'Two-beat rhythm',
    vibratePattern: [30, 120, 30],
  },
  {
    id: 'double', cat: 'pattern', name: 'Double', accent: '#0a84ff',
    desc: 'Two equal pulses',
    vibratePattern: [80, 100, 80],
  },
  {
    id: 'triple', cat: 'pattern', name: 'Triple', accent: '#5ac8fa',
    desc: 'Three quick taps',
    vibratePattern: [50, 70, 50, 70, 50],
  },
  {
    id: 'burst', cat: 'pattern', name: 'Burst', accent: '#ff9f0a',
    desc: 'Rapid micro pulses',
    vibratePattern: [12, 18, 12, 18, 12, 18, 12, 18, 12],
  },
  {
    id: 'long', cat: 'pattern', name: 'Long', accent: '#bf5af2',
    desc: 'Sustained 400 ms pulse',
    vibratePattern: [400],
  },
  {
    id: 'knock', cat: 'pattern', name: 'Knock', accent: '#8e8e93',
    desc: 'Three knocks on a door',
    vibratePattern: [60, 80, 60, 80, 60],
  },
  {
    id: 'alert', cat: 'pattern', name: 'Alert', accent: '#ff453a',
    desc: 'Urgent attention signal',
    vibratePattern: [100, 50, 100, 50, 200],
  },
  {
    id: 'ping', cat: 'pattern', name: 'Ping', accent: '#64d2ff',
    desc: 'Single short signal',
    vibratePattern: [15],
  },
  {
    id: 'sos', cat: 'pattern', name: 'SOS', accent: '#ff453a',
    desc: 'Morse code distress',
    vibratePattern: [50, 50, 50, 50, 50, 150, 150, 100, 150, 100, 150, 150, 50, 50, 50, 50, 50, 50],
  },
  {
    id: 'drumroll', cat: 'pattern', name: 'Drumroll', accent: '#ff9f0a',
    desc: 'Escalating to a finale',
    vibratePattern: [20, 28, 16, 22, 12, 18, 8, 14, 60, 80, 200],
  },
  {
    id: 'wave', cat: 'pattern', name: 'Wave', accent: '#30d158',
    desc: 'Rising frequency sweep',
    vibratePattern: [30, 40, 60, 30, 90, 20, 120],
  },
  {
    id: 'stutter', cat: 'pattern', name: 'Stutter', accent: '#64d2ff',
    desc: 'Micro-stutter flutter',
    vibratePattern: [8, 10, 8, 10, 8, 10, 8, 10, 40],
  },
  {
    id: 'countdown', cat: 'pattern', name: 'Countdown', accent: '#ffd60a',
    desc: 'Three descending beats',
    vibratePattern: [80, 200, 80, 200, 200],
  },
  {
    id: 'buzz', cat: 'pattern', name: 'Buzz', accent: '#ff375f',
    desc: 'Rapid vibration burst',
    hapticKey: 'buzz', vibratePattern: [30, 50, 30],
  },

  // ── EXTRA ─────────────────────────────────────────────────────────────────
  {
    id: 'tick', cat: 'extra', name: 'Tick', accent: '#e5e5ea',
    desc: '10 ms minimal click',
    vibratePattern: [10],
  },
  {
    id: 'thud', cat: 'extra', name: 'Thud', accent: '#bf5af2',
    desc: '300 ms deep rumble',
    vibratePattern: [300],
  },
  {
    id: 'zap', cat: 'extra', name: 'Zap', accent: '#ffd60a',
    desc: 'Electric shock sweep',
    vibratePattern: [20, 10, 40, 10, 20],
  },
  {
    id: 'confirm', cat: 'extra', name: 'Confirm', accent: '#30d158',
    desc: 'Soft two-note affirmation',
    vibratePattern: [30, 50, 60],
  },
  {
    id: 'denied', cat: 'extra', name: 'Denied', accent: '#ff453a',
    desc: 'Descending rejection',
    vibratePattern: [200, 100, 200],
  },
  {
    id: 'pulse', cat: 'extra', name: 'Pulse', accent: '#ff375f',
    desc: 'Slow deep heartbeat',
    vibratePattern: [100, 800, 100],
  },
  {
    id: 'glitch', cat: 'extra', name: 'Glitch', accent: '#ff375f',
    desc: 'Irregular micro chaos',
    vibratePattern: [5, 8, 15, 6, 10, 4, 20, 8, 5],
  },
  {
    id: 'tada', cat: 'extra', name: 'Tada!', accent: '#30d158',
    desc: 'Celebration fanfare',
    vibratePattern: [50, 30, 30, 30, 50, 30, 80, 30, 200],
  },
]
