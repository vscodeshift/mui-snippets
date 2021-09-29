import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <TextField select>'

export const body = ({
  formControlMode,
  $,
  Components: { TextField },
}: SnippetOptions): React.ReactElement<any> => (
  <TextField
    id="$"
    label="$"
    select
    {...(formControlMode === 'controlled'
      ? {
          value: $,
          onChange: $,
        }
      : {
          defaultValue: $,
        })}
    __multiLine
    $
  />
)
