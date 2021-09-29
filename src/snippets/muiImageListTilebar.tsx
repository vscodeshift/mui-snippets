import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <ImageListTileBar>'

export const body = ({
  Components: { ImageListTileBar, IconButton },
}: SnippetOptions): React.ReactElement<any> => (
  <ImageListTileBar
    title__optional="$"
    subtitle__optional="$"
    actionIcon__optional={
      <IconButton aria-label="$" __multiLineChildren $>
        $
      </IconButton>
    }
  />
)
