import { fontSizes } from '@dvashim/ui-core'
import { color } from '@dvashim/ui-core/color.stylex'
import { fontLineHeight } from '@dvashim/ui-core/font.lineHeight.stylex'
import { fontSize } from '@dvashim/ui-core/font.size.stylex'
import * as stylex from '@stylexjs/stylex'

export const options = {
  margin: '0px',
}

export default () => (
  <div {...stylex.props(styles.container)}>
    {fontSizes.map((size) => (
      <div key={size} {...stylex.props(styles.row)}>
        <code {...stylex.props(styles.label)}>{size}</code>
        <p
          {...stylex.props(styles.sample(fontSize[size], fontLineHeight[size]))}
        >
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
    ))}
  </div>
)

const styles = stylex.create({
  container: {
    display: 'grid',
    gap: 12,
    padding: 24,
    fontFamily: 'system-ui, sans-serif',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '64px 1fr',
    gap: 16,
    alignItems: 'baseline',
  },
  label: {
    fontFamily: 'ui-monospace, monospace',
    fontSize: 12,
    color: color.surfaceSubtleFg,
  },
  sample: (size: string, lh: string) => ({
    fontSize: size,
    lineHeight: lh,
    margin: 0,
  }),
})
