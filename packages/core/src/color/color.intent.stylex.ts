import * as stylex from '@stylexjs/stylex'
import type { ColorIntent } from './color.intent'
import { color } from './color.stylex'

type ColorIntentSlot =
  | 'solid'
  | 'solidFg'
  | 'subtle'
  | 'subtleFg'
  | 'outline'
  | 'outlineFg'

export const colorIntent = stylex.defineVars({
  solid: color.primary,
  solidFg: color.primaryFg,
  subtle: color.primarySubtle,
  subtleFg: color.primarySubtleFg,
  outline: color.primary,
  outlineFg: color.primary,
} satisfies Record<ColorIntentSlot, string>)

export const colorIntentPrimary = stylex.createTheme(colorIntent, {
  solid: color.primary,
  solidFg: color.primaryFg,
  subtle: color.primarySubtle,
  subtleFg: color.primarySubtleFg,
  outline: color.primary,
  outlineFg: color.primary,
})

export const colorIntentNeutral = stylex.createTheme(colorIntent, {
  solid: color.neutral,
  solidFg: color.neutralFg,
  subtle: color.neutralSubtle,
  subtleFg: color.neutralSubtleFg,
  outline: color.neutral,
  outlineFg: color.neutralSubtleFg,
})

export const colorIntentDanger = stylex.createTheme(colorIntent, {
  solid: color.danger,
  solidFg: color.dangerFg,
  subtle: color.dangerSubtle,
  subtleFg: color.dangerSubtleFg,
  outline: color.danger,
  outlineFg: color.danger,
})

export const colorIntentWarning = stylex.createTheme(colorIntent, {
  solid: color.warning,
  solidFg: color.warningFg,
  subtle: color.warningSubtle,
  subtleFg: color.warningSubtleFg,
  outline: color.warning,
  outlineFg: color.warning,
})

export const colorIntentSuccess = stylex.createTheme(colorIntent, {
  solid: color.success,
  solidFg: color.successFg,
  subtle: color.successSubtle,
  subtleFg: color.successSubtleFg,
  outline: color.success,
  outlineFg: color.success,
})

export const colorIntentInfo = stylex.createTheme(colorIntent, {
  solid: color.info,
  solidFg: color.infoFg,
  subtle: color.infoSubtle,
  subtleFg: color.infoSubtleFg,
  outline: color.info,
  outlineFg: color.info,
})

export const colorIntentThemes = {
  neutral: colorIntentNeutral,
  primary: colorIntentPrimary,
  danger: colorIntentDanger,
  warning: colorIntentWarning,
  success: colorIntentSuccess,
  info: colorIntentInfo,
} satisfies Record<ColorIntent, typeof colorIntentNeutral>
