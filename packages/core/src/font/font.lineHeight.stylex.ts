import * as stylex from '@stylexjs/stylex'
import type { FontSize } from './font.size'

export const fontLineHeight = stylex.defineVars({
  xs: '1rem',
  sm: '1.25rem',
  md: '1.5rem',
  lg: '1.75rem',
  xl: '1.75rem',
  '2xl': '2rem',
  '3xl': '2.25rem',
  '4xl': '2.5rem',
} satisfies Record<FontSize, string>)
