import { color } from '@dvashim/ui-core/color.stylex'
import * as stylex from '@stylexjs/stylex'

export const colorHacker = stylex.createTheme(color, {
  surface: '#000000',
  surfaceFg: '#00ff41',
  surfaceSubtle: '#0a1a0a',
  surfaceSubtleFg: '#33aa44',

  neutral: '#1a3a1a',
  neutralFg: '#00ff41',
  neutralSubtle: '#0a1a0a',
  neutralSubtleFg: '#5fcf6f',

  primary: '#00ff41',
  primaryFg: '#000000',
  primarySubtle: '#003311',
  primarySubtleFg: '#33ff66',

  danger: '#ff3333',
  dangerFg: '#000000',
  dangerSubtle: '#330808',
  dangerSubtleFg: '#ff6666',

  warning: '#ffaa00',
  warningFg: '#000000',
  warningSubtle: '#332200',
  warningSubtleFg: '#ffcc44',

  success: '#33ff88',
  successFg: '#000000',
  successSubtle: '#003322',
  successSubtleFg: '#66ffaa',

  info: '#00ddff',
  infoFg: '#000000',
  infoSubtle: '#002233',
  infoSubtleFg: '#66eeff',

  overlay: 'rgba(0, 15, 5, 0.9)',
  overlayFg: '#00ff41',
  border: '#1a4d1a',
  borderSubtle: '#0d260d',

  link: '#00ffff',
  focus: '#39ff14',
})
