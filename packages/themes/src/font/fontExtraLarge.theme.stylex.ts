import { fontLineHeight } from '@dvashim/ui-core/font.lineHeight.stylex'
import { fontSize } from '@dvashim/ui-core/font.size.stylex'
import * as stylex from '@stylexjs/stylex'

export const fontSizeExtraLarge = stylex.createTheme(fontSize, {
  xs: '1rem',
  sm: '1.125rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '1.875rem',
  '2xl': '2.25rem',
  '3xl': '2.75rem',
  '4xl': '3.25rem',
})

export const fontLineHeightExtraLarge = stylex.createTheme(fontLineHeight, {
  xs: '1.5rem',
  sm: '1.75rem',
  md: '1.75rem',
  lg: '2rem',
  xl: '2.25rem',
  '2xl': '2.5rem',
  '3xl': '2.75rem',
  '4xl': '3rem',
})

export const fontExtraLarge = [
  fontSizeExtraLarge,
  fontLineHeightExtraLarge,
] as const
