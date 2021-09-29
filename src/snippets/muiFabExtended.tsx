import * as React from 'react'
import { SnippetOptions } from './index'

export const colors = ['default', 'inherit', 'primary', 'secondary']
export const variants = ['circular', 'extended']
export const sizes = ['large', 'medium', 'small']

export const description = 'MUI <Fab variant="extended">'

export const body = ({
  $,
  Components: { Box, Fab, $Icon },
}: SnippetOptions): React.ReactElement<any> => (
  <Fab
    variant={$(variants)}
    color={$(colors)}
    size={$(sizes)}
    aria-label="$"
    __oneLineProps
    $
  >
    <Box marginRight={1}>
      <$Icon />
    </Box>
    $
  </Fab>
)
