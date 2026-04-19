export const colorIntents = [
  'neutral',
  'primary',
  'danger',
  'warning',
  'success',
  'info',
] as const

export type ColorIntent = (typeof colorIntents)[number]
