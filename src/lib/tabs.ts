import type { PatternCategory } from './patterns'

export interface TabDef {
  id: string
  label: string
}

export const TABS: TabDef[] = [
  { id: 'all',          label: 'All' },
  { id: 'notification', label: 'Notification' },
  { id: 'impact',       label: 'Impact' },
  { id: 'selection',    label: 'Selection' },
  { id: 'pattern',      label: 'Patterns' },
  { id: 'extra',        label: 'Extra' },
]

export const CAT_LABELS: Record<PatternCategory, string> = {
  notification: 'Notification',
  impact:       'Impact',
  selection:    'Selection',
  pattern:      'Patterns',
  extra:        'Extra',
}
