import { fontLineHeight } from '@dvashim/ui-core/font.lineHeight.stylex'
import { fontSize } from '@dvashim/ui-core/font.size.stylex'
import * as stylex from '@stylexjs/stylex'

export const fontSizeComfortable = stylex.createTheme(fontSize, {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
})

export const fontLineHeightComfortable = stylex.createTheme(fontLineHeight, {
  xs: '1rem',
  sm: '1.25rem',
  md: '1.5rem',
  lg: '1.75rem',
  xl: '1.75rem',
  '2xl': '2rem',
  '3xl': '2.25rem',
  '4xl': '2.5rem',
})

export const fontComfortable = [
  fontSizeComfortable,
  fontLineHeightComfortable,
] as const
