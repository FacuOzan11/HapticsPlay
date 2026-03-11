import type { PatternDef } from './patterns'

let wh: import('web-haptics').WebHaptics | null = null

async function getWH() {
  if (!wh) {
    const { WebHaptics } = await import('web-haptics')
    wh = new WebHaptics()
  }
  return wh
}

export async function fireHaptic(pattern: PatternDef): Promise<void> {
  // Layer 1: ios-haptics — Safari 17.4+ native CoreHaptics via checkbox switch trick
  if (typeof window !== 'undefined') {
    try {
      const { haptic } = await import('ios-haptics')
      if (pattern.iosHapticStyle === 'confirm') {
        haptic.confirm()
      } else if (pattern.iosHapticStyle === 'error') {
        haptic.error()
      } else if (pattern.iosHapticStyle === 'single') {
        haptic()
      }
    } catch {
      // ios-haptics not supported, continue
    }
  }

  // Layer 2: web-haptics preset (Android Chrome via Vibration API with richer patterns)
  if (pattern.hapticKey) {
    try {
      const H = await getWH()
      await H.trigger(pattern.hapticKey as Parameters<typeof H.trigger>[0])
    } catch {
      // web-haptics not supported, continue
    }
    return // don't also fire raw vibrate if we have a preset
  }

  // Layer 3: raw navigator.vibrate for custom patterns (no web-haptics preset)
  if (pattern.vibratePattern && typeof navigator !== 'undefined') {
    navigator.vibrate?.(pattern.vibratePattern)
  }
}
