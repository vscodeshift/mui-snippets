import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <Snackbar>'

export const verticalAnchors = ['bottom', 'top']
export const horizontalAnchors = ['left', 'center', 'right']

export const body = ({
  $,
  Components: { Snackbar, IconButton },
  Icons: { Close },
}: SnippetOptions): React.ReactElement<any> => {
  const $onClose = $()
  return (
    <Snackbar
      anchorOrigin={{
        vertical: $(verticalAnchors),
        horizontal: $(horizontalAnchors),
      }}
      open={$}
      onClose={$onClose}
      message="$"
      action__optional={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={$onClose}
        >
          <Close fontSize="small" />
        </IconButton>
      }
    />
  )
}
