import * as React from 'react'
import { SnippetOptions } from './index'
import { directions, wraps } from './muiGridContainer'

export const description = 'MUI <Grid container> with centering'

export const body = ({
  $,

  Components: { Grid },
}: SnippetOptions): React.ReactElement<any> => (
  <Grid
    container
    spacing={$(1)}
    direction__optional={$(directions)}
    justifyContent={$('center')}
    alignItems={$('center')}
    alignContent={$('center')}
    wrap__optional={$(wraps)}
    $
  >
    $
  </Grid>
)
