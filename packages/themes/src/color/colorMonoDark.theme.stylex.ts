import { color } from '@dvashim/ui-core/color.stylex'
import * as stylex from '@stylexjs/stylex'

export const colorMonoDark = stylex.createTheme(color, {
  surface: '#0a0a0a',
  surfaceFg: '#fafafa',
  surfaceSubtle: '#171717',
  surfaceSubtleFg: '#a3a3a3',

  neutral: '#525252',
  neutralFg: '#fafafa',
  neutralSubtle: '#262626',
  neutralSubtleFg: '#d4d4d4',

  primary: '#22d3ee',
  primaryFg: '#083344',
  primarySubtle: '#164e63',
  primarySubtleFg: '#a5f3fc',

  danger: '#fb7185',
  dangerFg: '#4c0519',
  dangerSubtle: '#881337',
  dangerSubtleFg: '#fecdd3',

  warning: '#a3a3a3',
  warningFg: '#171717',
  warningSubtle: '#262626',
  warningSubtleFg: '#a3a3a3',

  success: '#a3a3a3',
  successFg: '#171717',
  successSubtle: '#262626',
  successSubtleFg: '#a3a3a3',

  info: '#a3a3a3',
  infoFg: '#171717',
  infoSubtle: '#262626',
  infoSubtleFg: '#a3a3a3',

  overlay: 'rgba(0, 0, 0, 0.8)',
  overlayFg: '#ffffff',
  border: '#404040',
  borderSubtle: '#262626',

  link: '#67e8f9',
  focus: '#22d3ee',
})
