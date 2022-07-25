import * as React from 'react'
import { SnippetOptions } from './index'

export const variants = ['text', 'circular', 'rectangular']
export const animations = ['pulse', 'wave', false]

export const description = 'MUI <Skeleton>'

export const body = ({
  $,
  Components: { Skeleton },
}: SnippetOptions): React.ReactElement<any> => (
  <Skeleton
    variant={$(variants)}
    width={'$'}
    height={'$'}
    animation={$(animations)}
    __oneLineProps
    $
  />
)
