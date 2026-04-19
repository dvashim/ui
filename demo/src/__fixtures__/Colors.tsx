import type { ColorToken } from '@dvashim/ui-core'
import { color } from '@dvashim/ui-core/color.stylex'
import { fontSize } from '@dvashim/ui-core/font.size.stylex'
import {
  colorDark,
  colorHacker,
  colorLight,
  colorMonoDark,
  colorMonoDim,
  colorMonoLight,
} from '@dvashim/ui-themes/color.themes.stylex'
import * as stylex from '@stylexjs/stylex'

const tokens: [ColorToken, ColorToken?][] = [
  ['surface', 'surfaceFg'],
  ['surfaceSubtle', 'surfaceSubtleFg'],
  ['neutral', 'neutralFg'],
  ['neutralSubtle', 'neutralSubtleFg'],
  ['primary', 'primaryFg'],
  ['primarySubtle', 'primarySubtleFg'],
  ['danger', 'dangerFg'],
  ['dangerSubtle', 'dangerSubtleFg'],
  ['warning', 'warningFg'],
  ['warningSubtle', 'warningSubtleFg'],
  ['success', 'successFg'],
  ['successSubtle', 'successSubtleFg'],
  ['info', 'infoFg'],
  ['infoSubtle', 'infoSubtleFg'],
  ['overlay', 'overlayFg'],
  ['border'],
  ['borderSubtle'],
  ['surface', 'link'],
  ['focus'],
]

const ColorTheme = (props?: { theme?: typeof colorLight }) => {
  return (
    <div {...stylex.props(props?.theme, styles.grid(color.surface))}>
      {tokens.map(([bg, fg]) => {
        const outlined = bg.includes('border') || bg === 'focus'
        const link = fg === 'link'
        const subtle = bg.endsWith('Subtle')
        const name = fg ? (subtle ? bg.slice(0, -6) : bg) : undefined
        const [a, b] = (
          name
            ? subtle
              ? [name, `${name}Fg`]
              : [`${name}Subtle`, `${name}SubtleFg`]
            : []
        ) as [ColorToken?, ColorToken?]

        const label = link
          ? fg
          : subtle
            ? `${name ?? bg.slice(0, -6)}${subtle ? ' / subtle' : ''}`
            : bg

        return (
          <div key={[bg, fg].toString()} {...stylex.props(styles.swatch)}>
            <div {...stylex.props(styles.blockContainer)}>
              {bg === 'overlay' && <div {...stylex.props(styles.overlayBg)} />}
              {link ? (
                <div
                  {...stylex.props(
                    styles.blockBase,
                    styles.blockLink(color[fg])
                  )}
                >
                  Link
                </div>
              ) : outlined ? (
                <div
                  {...stylex.props(
                    styles.blockBase,
                    styles.blockOutlined(color[bg])
                  )}
                ></div>
              ) : (
                <div
                  {...stylex.props(
                    styles.blockBase,
                    styles.blockColor(color[bg], fg ? color[fg] : null)
                  )}
                >
                  {fg && 'Abc'}
                  {a && b && (
                    <div {...stylex.props(styles.tag(color[a], color[b]))}>
                      חדש
                    </div>
                  )}
                </div>
              )}
            </div>

            <code
              {...stylex.props(styles.label)}
              style={{ color: color.surfaceSubtleFg }}
            >
              {label}
            </code>
          </div>
        )
      })}
    </div>
  )
}

export const options = {
  margin: 0,
}

export default {
  Theme: () => <ColorTheme />,
  'All themes': () => (
    <>
      <ColorTheme theme={colorLight} />
      <ColorTheme theme={colorDark} />
      <ColorTheme theme={colorMonoLight} />
      <ColorTheme theme={colorMonoDim} />
      <ColorTheme theme={colorMonoDark} />
      <ColorTheme theme={colorHacker} />
    </>
  ),
}

const styles = stylex.create({
  grid: (bg: string) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 12,
    padding: 24,
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: bg,
  }),
  swatch: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  blockContainer: {
    height: 72,
    position: 'relative',
  },
  blockBase: {
    borderRadius: 12,
    position: 'absolute',
    inset: 0,
    display: 'grid',
    placeItems: 'center',
  },
  blockColor: (bg: string, fg: string | null) => ({
    fontSize: fontSize['4xl'],
    fontWeight: 'bolder',
    backgroundColor: bg,
    color: fg,
  }),
  blockOutlined: (color: string) => ({
    borderWidth: 3,
    borderColor: color,
    borderStyle: 'solid',
    '::after': {
      position: 'absolute',
      content: '',
      inset: 7,
      borderWidth: 2,
      borderColor: color,
      borderStyle: 'solid',
      borderRadius: 6,
    },
    '::before': {
      position: 'absolute',
      content: '',
      inset: 17,
      borderWidth: 1,
      borderColor: color,
      borderStyle: 'solid',
      borderRadius: 2,
    },
  }),
  blockLink: (color: string) => ({
    borderWidth: 2,
    borderColor: color,
    borderStyle: 'dashed',
    fontSize: fontSize['3xl'],
    textDecoration: 'underline',
    color: color,
  }),
  tag: (bg: string, fg: string) => ({
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: fontSize.lg,
    paddingInline: 8,
    paddingBlock: 6,
    backgroundColor: bg,
    color: fg,
    borderRadius: 6,
  }),
  overlayBg: {
    position: 'absolute',
    inset: 0,
    borderRadius: 12,
    backgroundImage: `linear-gradient(45deg, #ccc 26%, transparent 26%),
      linear-gradient(135deg, #ccc 26%, transparent 26%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(135deg, transparent 75%, #ccc 75%)`,
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 0, 10px -10px, 0px 10px',
  },
  label: {
    padding: '8px 12px',
    fontSize: fontSize.xs,
    fontFamily: 'ui-monospace, monospace',
    background: 'white',
    color: '#333',
  },
})
