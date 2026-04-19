import { color } from '@dvashim/ui-core/color.stylex'
import * as stylex from '@stylexjs/stylex'

export const colorMonoDim = stylex.createTheme(color, {
  surface: '#1c1c1c',
  surfaceFg: '#fafafa',
  surfaceSubtle: '#333333',
  surfaceSubtleFg: '#a3a3a3',

  neutral: '#525252',
  neutralFg: '#fafafa',
  neutralSubtle: '#333333',
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
  warningSubtle: '#333333',
  warningSubtleFg: '#d4d4d4',

  success: '#a3a3a3',
  successFg: '#171717',
  successSubtle: '#333333',
  successSubtleFg: '#d4d4d4',

  info: '#a3a3a3',
  infoFg: '#171717',
  infoSubtle: '#333333',
  infoSubtleFg: '#d4d4d4',

  overlay: 'rgba(0, 0, 0, 0.75)',
  overlayFg: '#ffffff',
  border: '#525252',
  borderSubtle: '#404040',

  link: '#67e8f9',
  focus: '#22d3ee',
})
