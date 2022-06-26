import * as React from 'react'
import { SnippetOptions } from './index'

export const variants = ['fullWidth', 'inset', 'middle']
export const orientations = ['horizontal', 'vertical']

export const description = 'MUI <Divider>'

export const body = ({
  $,
  Components: { Divider },
}: SnippetOptions): React.ReactElement<any> => (
  <Divider variant={$(variants)} orientation={$(orientations)} $ />
)
