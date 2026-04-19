import { Button } from '@dvashim/ui-components'
import { colorIntents } from '@dvashim/ui-core'
import { fontLineHeight } from '@dvashim/ui-core/font.lineHeight.stylex'
import { fontSize } from '@dvashim/ui-core/font.size.stylex'
import * as stylex from '@stylexjs/stylex'
import { Fragment } from 'react/jsx-runtime'

export const options = {
  margin: '0px',
}

const variants = ['solid', 'subtle', 'outlined', 'ghost'] as const

export default () => {
  return (
    <div {...stylex.props(styles.grid)}>
      {colorIntents.map((intent) =>
        variants.map((variant) => (
          <Fragment key={`${intent}-${variant}`}>
            <Button {...{ intent, variant }} $style={styles.button}>
              {intent} / {variant}
            </Button>
            {variant === 'outlined' && (
              <>
                <Button
                  {...{ intent, variant }}
                  outlineWidth="thick"
                  $style={styles.button}
                >
                  {intent} / thick
                </Button>
                <Button
                  {...{ intent, variant }}
                  outlineWidth="medium"
                  outlineStyle="dotted"
                  $style={styles.button}
                >
                  {intent} / dashed
                </Button>
              </>
            )}
          </Fragment>
        ))
      )}
    </div>
  )
}

const styles = stylex.create({
  grid: {
    display: 'grid',
    gap: 12,
    padding: 24,
    gridTemplateColumns: 'repeat(6, 1fr)',
  },
  button: {
    borderRadius: 12,
    paddingInline: 25,
    paddingBlock: 20,
    textTransform: 'capitalize',
    fontSize: fontSize.xl,
    lineHeight: fontLineHeight.xl,
  },
})
