import * as React from 'react'
import { SnippetOptions } from './index'

export const underlines = ['hover', 'always', 'none']

export const description = 'MUI <Link>'

export const body = ({
  $,
  Components: { Link },
}: SnippetOptions): React.ReactElement<any> => (
  <Link
    href={'$'}
    underline={$(underlines)}
    target="_blank"
    rel="noopener noreferrer"
    $
  >
    $
  </Link>
)
