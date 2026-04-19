import * as stylex from '@stylexjs/stylex'
import type { ColorToken } from './color'

export const color = stylex.defineVars({
  surface: '#ffffff',
  surfaceFg: '#18181b',
  surfaceSubtle: '#f4f4f5',
  surfaceSubtleFg: '#52525b',

  neutral: '#52525b',
  neutralFg: '#ffffff',
  neutralSubtle: '#e4e4e7',
  neutralSubtleFg: '#27272a',

  primary: '#2563eb',
  primaryFg: '#ffffff',
  primarySubtle: '#dbeafe',
  primarySubtleFg: '#1e40af',

  danger: '#dc2626',
  dangerFg: '#ffffff',
  dangerSubtle: '#fee2e2',
  dangerSubtleFg: '#991b1b',

  warning: '#b45309',
  warningFg: '#ffffff',
  warningSubtle: '#fef3c7',
  warningSubtleFg: '#92400e',

  success: '#15803d',
  successFg: '#ffffff',
  successSubtle: '#dcfce7',
  successSubtleFg: '#166534',

  info: '#0369a1',
  infoFg: '#ffffff',
  infoSubtle: '#e0f2fe',
  infoSubtleFg: '#075985',

  overlay: 'rgba(0, 0, 0, 0.6)',
  overlayFg: '#ffffff',
  border: '#d4d4d8',
  borderSubtle: '#e4e4e7',

  link: '#1d4ed8',
  focus: '#3b82f6',
} satisfies Record<ColorToken, string>)
