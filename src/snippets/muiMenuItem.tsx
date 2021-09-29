import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <MenuItem>'

export const body = ({
  $,

  Components: { MenuItem },
}: SnippetOptions): React.ReactElement<any> => (
  <MenuItem onClick={$} $>
    $
  </MenuItem>
)
