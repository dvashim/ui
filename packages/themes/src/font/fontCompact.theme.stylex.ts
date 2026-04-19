import { fontLineHeight } from '@dvashim/ui-core/font.lineHeight.stylex'
import { fontSize } from '@dvashim/ui-core/font.size.stylex'
import * as stylex from '@stylexjs/stylex'

export const fontSizeCompact = stylex.createTheme(fontSize, {
  xs: '0.6875rem',
  sm: '0.75rem',
  md: '0.875rem',
  lg: '1rem',
  xl: '1.125rem',
  '2xl': '1.25rem',
  '3xl': '1.5rem',
  '4xl': '1.875rem',
})

export const fontLineHeightCompact = stylex.createTheme(fontLineHeight, {
  xs: '0.875rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '1.75rem',
  '2xl': '1.75rem',
  '3xl': '2rem',
  '4xl': '2.25rem',
})

export const fontCompact = [fontSizeCompact, fontLineHeightCompact] as const
