import { color } from '@dvashim/ui-core/color.stylex'
import * as stylex from '@stylexjs/stylex'

export const colorDark = stylex.createTheme(color, {
  surface: '#09090b',
  surfaceFg: '#fafafa',
  surfaceSubtle: '#18181b',
  surfaceSubtleFg: '#a1a1aa',

  neutral: '#52525b',
  neutralFg: '#fafafa',
  neutralSubtle: '#27272a',
  neutralSubtleFg: '#d4d4d8',

  primary: '#60a5fa',
  primaryFg: '#172554',
  primarySubtle: '#1e3a8a',
  primarySubtleFg: '#bfdbfe',

  danger: '#f87171',
  dangerFg: '#450a0a',
  dangerSubtle: '#7f1d1d',
  dangerSubtleFg: '#fecaca',

  warning: '#f59e0b',
  warningFg: '#451a03',
  warningSubtle: '#78350f',
  warningSubtleFg: '#fde68a',

  success: '#22c55e',
  successFg: '#052e16',
  successSubtle: '#14532d',
  successSubtleFg: '#bbf7d0',

  info: '#0ea5e9',
  infoFg: '#082f49',
  infoSubtle: '#0c4a6e',
  infoSubtleFg: '#bae6fd',

  overlay: 'rgba(0, 0, 0, 0.8)',
  overlayFg: '#ffffff',
  border: '#3f3f46',
  borderSubtle: '#27272a',

  link: '#93c5fd',
  focus: '#60a5fa',
})
