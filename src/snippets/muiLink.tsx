import * as React from 'react'
import { SnippetOptions } from './index'

export const underlines = ['hover', 'always', 'none']
const variants = [
  'body1',
  'body2',
  'button',
  'caption',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'inherit',
  'overline',
  'subtitle1',
  'subtitle2',
]

export const description = 'MUI <Link>'

export const body = ({
  $,
  Components: { Link },
}: SnippetOptions): React.ReactElement<any> => (
  <Link
    href={'$'}
    variant={$(variants)}
    underline={$(underlines)}
    target="_blank"
    rel="noopener noreferrer"
    $
  >
    $
  </Link>
)
