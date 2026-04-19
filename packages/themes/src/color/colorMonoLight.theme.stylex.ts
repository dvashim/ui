import { color } from '@dvashim/ui-core/color.stylex'
import * as stylex from '@stylexjs/stylex'

export const colorMonoLight = stylex.createTheme(color, {
  surface: '#ffffff',
  surfaceFg: '#171717',
  surfaceSubtle: '#f5f5f5',
  surfaceSubtleFg: '#525252',

  neutral: '#525252',
  neutralFg: '#ffffff',
  neutralSubtle: '#e5e5e5',
  neutralSubtleFg: '#262626',

  primary: '#0e7490',
  primaryFg: '#ffffff',
  primarySubtle: '#cffafe',
  primarySubtleFg: '#155e75',

  danger: '#be123c',
  dangerFg: '#ffffff',
  dangerSubtle: '#ffe4e6',
  dangerSubtleFg: '#9f1239',

  warning: '#404040',
  warningFg: '#ffffff',
  warningSubtle: '#e5e5e5',
  warningSubtleFg: '#262626',

  success: '#404040',
  successFg: '#ffffff',
  successSubtle: '#e5e5e5',
  successSubtleFg: '#262626',

  info: '#404040',
  infoFg: '#ffffff',
  infoSubtle: '#e5e5e5',
  infoSubtleFg: '#262626',

  overlay: 'rgba(0, 0, 0, 0.6)',
  overlayFg: '#ffffff',
  border: '#d4d4d4',
  borderSubtle: '#e5e5e5',

  link: '#155e75',
  focus: '#06b6d4',
})
