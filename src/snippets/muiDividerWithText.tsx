import * as React from 'react'
import { orientations } from './muiDivider'
import { SnippetOptions } from './index'

export const textAlignments = ['center', 'left', 'right']

export const description = 'MUI <Divider>'

export const body = ({
  $,
  Components: { Divider },
}: SnippetOptions): React.ReactElement<any> => (
  <Divider textAlign={$(textAlignments)} orientation={$(orientations)} $>
    $
  </Divider>
)
