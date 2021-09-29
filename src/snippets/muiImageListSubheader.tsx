import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <ImageList> subheader'

export const body = ({
  $,
  Components: { ImageListTile, ListSubheader },
}: SnippetOptions): React.ReactElement<any> => (
  <ImageListTile
    cols={$(2)}
    style={{
      height: 'auto',
    }}
  >
    <ListSubheader component="div">$</ListSubheader>
  </ImageListTile>
)
