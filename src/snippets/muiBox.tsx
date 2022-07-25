import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <Box>'

export const body = ({
  Components: { Box },
}: SnippetOptions): React.ReactElement<any> => (
  <Box display="$" mx={'$'} my={'$'} sx={'$'} __oneLineProps $>
    $
  </Box>
)
