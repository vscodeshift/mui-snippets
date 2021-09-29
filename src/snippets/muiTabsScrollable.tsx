import * as React from 'react'
import { SnippetOptions } from './index'
import { colors } from './muiAppBar'

export const description = 'MUI scrollable <Tabs>'

export const body = ({
  $,

  Components: { AppBar, Tabs },
}: SnippetOptions): React.ReactElement<any> => (
  <AppBar position="static" color={$(colors)} $ __oneLineProps>
    <Tabs
      value={$}
      onChange={$}
      aria-label="$"
      variant="scrollable"
      scrollButtons={$('auto')}
      $
    >
      $
    </Tabs>
  </AppBar>
)
