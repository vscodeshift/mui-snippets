import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <Container>'

export const maxWidths = ['lg', 'xs', 'sm', 'md', 'xl']

export const body = ({
  $,

  Components: { Container },
}: SnippetOptions): React.ReactElement<any> => (
  <Container maxWidth={$(maxWidths)} __multiLineChildren $>
    $
  </Container>
)
