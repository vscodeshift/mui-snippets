import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <Link>'

export const body = ({
  Components: { Link },
}: SnippetOptions): React.ReactElement<any> => (
  <Link
    href={'$'}
    target="_blank"
    underline="hover"
    rel="noopener noreferrer"
  />
)
