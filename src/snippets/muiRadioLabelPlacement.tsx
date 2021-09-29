import * as React from 'react'
import { SnippetOptions } from './index'

import { labelPlacements } from './muiFormControl'

export const description =
  'MUI <Radio> with <FormControlLabel> with labelPlacement'

export const body = ({
  $,
  Components: { FormControlLabel, Radio },
}: SnippetOptions): React.ReactElement<any> => (
  <FormControlLabel
    value="$"
    label="$"
    labelPlacement={$(labelPlacements)}
    control={<Radio $ />}
  />
)
