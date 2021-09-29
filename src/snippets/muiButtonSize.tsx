import * as React from 'react'
import { SnippetOptions } from './index'
import { variants, colors, sizes } from './muiButton'

export const description = 'MUI <Button> with size'

export const body = ({
  $,

  Components: { Button },
}: SnippetOptions): React.ReactElement<any> => (
  <Button variant={$(variants)} color={$(colors)} size={$(sizes)} $>
    $
  </Button>
)
