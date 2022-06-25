import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <Paper>'

export const body = ({
  Components: { Paper },
}: SnippetOptions): React.ReactElement<any> => <Paper elevation={'$'} />
