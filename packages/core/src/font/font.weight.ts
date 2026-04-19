export const fontWeights = [
  'light',
  'regular',
  'medium',
  'semibold',
  'bold',
] as const

export type FontWeight = (typeof fontWeights)[number]
