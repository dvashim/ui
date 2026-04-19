import type { ColorIntent } from './color.intent'

type ColorFamily<T extends string> = `${T}${'' | 'Subtle'}${'' | 'Fg'}`
type ColorIntentToken = ColorFamily<ColorIntent>
type ColorSurfaceToken = ColorFamily<'surface'>
type ColorBorderToken = 'border' | 'borderSubtle'
type ColorOverlayToken = 'overlay' | 'overlayFg'

export type ColorToken =
  | ColorSurfaceToken
  | ColorIntentToken
  | ColorBorderToken
  | ColorOverlayToken
  | 'link'
  | 'focus'
