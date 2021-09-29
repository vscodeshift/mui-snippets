import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <Stepper>'

export const body = ({
  $,

  Components: { Stepper },
}: SnippetOptions): React.ReactElement<any> => (
  <Stepper activeStep={$} __oneLineProps>
    $
  </Stepper>
)
