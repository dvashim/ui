export const fontSizes = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
] as const

export type FontSize = (typeof fontSizes)[number]
