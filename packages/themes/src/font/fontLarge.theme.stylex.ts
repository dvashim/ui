import { fontLineHeight } from '@dvashim/ui-core/font.lineHeight.stylex'
import { fontSize } from '@dvashim/ui-core/font.size.stylex'
import * as stylex from '@stylexjs/stylex'

export const fontSizeLarge = stylex.createTheme(fontSize, {
  xs: '0.875rem',
  sm: '1rem',
  md: '1.125rem',
  lg: '1.25rem',
  xl: '1.5rem',
  '2xl': '1.875rem',
  '3xl': '2.25rem',
  '4xl': '2.75rem',
})

export const fontLineHeightLarge = stylex.createTheme(fontLineHeight, {
  xs: '1.25rem',
  sm: '1.5rem',
  md: '1.75rem',
  lg: '1.75rem',
  xl: '2rem',
  '2xl': '2.25rem',
  '3xl': '2.5rem',
  '4xl': '2.75rem',
})

export const fontLarge = [fontSizeLarge, fontLineHeightLarge] as const
