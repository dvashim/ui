import * as stylex from '@stylexjs/stylex'

export function InteractionOverlay(props: { $style?: stylex.StyleXStyles }) {
  return <span aria-hidden {...stylex.props(styles.overlay, props.$style)} />
}

const styles = stylex.create({
  overlay: {
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    pointerEvents: 'none',
    backgroundColor: 'currentColor',
    opacity: {
      default: 0,
      [stylex.when.ancestor(':hover')]: 0.1,
      [stylex.when.ancestor(':focus-visible')]: 0.15,
      [stylex.when.ancestor(':active')]: 0.15,
    },
    transitionProperty: 'opacity',
    transitionDuration: '0.2s',
  },
})
