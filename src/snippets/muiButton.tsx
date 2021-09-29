import * as React from 'react'
import { SnippetOptions } from './index'

export const variants = ['text', 'contained', 'outlined']
export const colors = [
  'primary',
  'secondary',
  'inherit',
  'success',
  'error',
  'info',
  'warning',
]
export const sizes = ['small', 'medium', 'large']

export const description = 'MUI <Button>'

export const body = ({
  $,

  Components: { Button },
}: SnippetOptions): React.ReactElement<any> => (
  <Button variant={$(variants)} color={$(colors)} __oneLineProps $>
    $
  </Button>
)
