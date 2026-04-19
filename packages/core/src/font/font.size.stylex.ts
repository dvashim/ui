import * as stylex from '@stylexjs/stylex'
import type { FontSize } from './font.size'

export const fontSize = stylex.defineVars({
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
} satisfies Record<FontSize, string>)
