import { color } from '@dvashim/ui-core/color.stylex'
import {
  colorDark,
  colorHacker,
  colorLight,
  colorMonoDark,
  colorMonoDim,
  colorMonoLight,
} from '@dvashim/ui-themes/color.themes.stylex'
import {
  fontComfortable,
  fontCompact,
  fontExtraLarge,
  fontLarge,
} from '@dvashim/ui-themes/font.themes.stylex'
import * as stylex from '@stylexjs/stylex'
import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useSelect } from 'react-cosmos/client'

const themes = {
  light: colorLight,
  dark: colorDark,
  monoLight: colorMonoLight,
  monoDark: colorMonoDark,
  monoDim: colorMonoDim,
  hacker: colorHacker,
}

const fontThemes = {
  comfortable: fontComfortable,
  compact: fontCompact,
  large: fontLarge,
  extraLarge: fontExtraLarge,
}

export default ({
  children,
  options,
}: {
  children: ReactNode
  options?: { margin?: number | string }
}) => {
  document.body.style.margin = String(options?.margin ?? 'revert')

  const [theme] = useSelect('theme', {
    options: Object.keys(themes) as (keyof typeof themes)[],
    defaultValue: 'light',
  })

  const [fontDensity] = useSelect('fontDensity', {
    options: Object.keys(fontThemes) as (keyof typeof fontThemes)[],
    defaultValue: 'comfortable',
  })

  useEffect(() => {
    const { className, style } = stylex.props(
      themes[theme],
      ...fontThemes[fontDensity]
    )
    const classes = className ? className.split(/\s+/).filter(Boolean) : []

    if (color.surface) {
      document.body.style.setProperty('background-color', String(color.surface))
      document.body.style.setProperty('color', String(color.surfaceFg))
    }

    if (classes.length) {
      document.body.classList.add(...classes)
    }

    if (style) {
      for (const [k, v] of Object.entries(style)) {
        document.body.style.setProperty(k, String(v))
      }
    }

    return () => {
      document.body.style.setProperty('background-color', 'revert')
      document.body.style.setProperty('color', 'revert')

      if (classes.length) {
        document.body.classList.remove(...classes)
      }

      if (style) {
        for (const k of Object.keys(style))
          document.body.style.removeProperty(k)
      }
    }
  }, [theme, fontDensity])

  return <>{children}</>
}
