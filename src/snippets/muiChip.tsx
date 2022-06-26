import * as React from 'react'
import { SnippetOptions } from './index'

export const variants = ['filled', 'outlined']
export const sizes = ['medium', 'small']
export const colors = [
  'default',
  'primary',
  'secondary',
  'error',
  'info',
  'success',
  'warning',
]

export const description = 'MUI <Chip>'

export const body = ({
  $,
  Components: { Chip },
}: SnippetOptions): React.ReactElement<any> => (
  <Chip
    variant={$(variants)}
    sizes={$(sizes)}
    colors={$(colors)}
    label={'$'}
    __oneLineProps
    $
  />
)
