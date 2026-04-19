import * as stylex from '@stylexjs/stylex'
import type { FontWeight } from './font.weight'

export const fontWeight = stylex.defineVars({
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} satisfies Record<FontWeight, string>)
