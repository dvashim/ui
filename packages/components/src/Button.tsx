import type { ColorIntent } from '@dvashim/ui-core'
import {
  colorIntent,
  colorIntentThemes,
} from '@dvashim/ui-core/color.intent.stylex'
import * as stylex from '@stylexjs/stylex'
import type { CSSProperties, PropsWithChildren } from 'react'
import { InteractionOverlay } from './InteractionOverlay'

export function Button(
  props: PropsWithChildren<{
    onClick?: () => void
    intent?: ColorIntent
    variant?: 'solid' | 'subtle' | 'outlined' | 'ghost'
    outlineWidth?: CSSProperties['borderWidth']
    outlineStyle?: CSSProperties['borderStyle']
    $style?: stylex.StyleXStyles
  }>
) {
  return (
    <button
      {...stylex.props(
        styles.button,
        stylex.defaultMarker(),
        styles[props.variant ?? 'solid'],
        !!props.intent && colorIntentThemes[props.intent],
        props.$style
      )}
      onClick={props.onClick}
    >
      {props.children}
      {props.variant === 'outlined' && (
        <span
          {...stylex.props(
            styles.outlineOverlay(props.outlineWidth, props.outlineStyle)
          )}
          aria-hidden
        />
      )}
      <InteractionOverlay />
    </button>
  )
}

const styles = stylex.create({
  button: {
    position: 'relative',
    padding: 10,
    borderStyle: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  solid: {
    backgroundColor: colorIntent.solid,
    color: colorIntent.solidFg,
  },
  subtle: {
    backgroundColor: colorIntent.subtle,
    color: colorIntent.subtleFg,
  },
  outlined: {
    backgroundColor: 'transparent',
    color: colorIntent.outlineFg,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colorIntent.outlineFg,
  },
  outlineOverlay: (
    width: CSSProperties['borderWidth'],
    style: CSSProperties['borderStyle']
  ) => ({
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    borderRadius: 'inherit',
    borderStyle: style ?? 'solid',
    borderWidth: width ?? 'thin',
    borderColor: colorIntent.outline,
    boxSizing: 'border-box',
  }),
})
