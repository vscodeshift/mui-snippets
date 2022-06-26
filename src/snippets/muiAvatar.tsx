import * as React from 'react'
import { SnippetOptions } from './index'

export const variants = ['circular', 'rounded', 'square']

export const description = 'MUI <Avatar>'

export const body = ({
  $,
  Components: { Avatar },
}: SnippetOptions): React.ReactElement<any> => (
  <Avatar
    variant={$(variants)}
    src={'$'}
    alt={'$'}
    sx={{ width: '$', height: '$' }}
    __oneLineProps
    $
  />
)
