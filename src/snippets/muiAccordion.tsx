import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <Accordion>'

export const body = ({
  $,
  Components: { Accordion, AccordionSummary, AccordionDetails, Typography },
  Icons: { ExpandMore },
}: SnippetOptions): React.ReactElement<any> => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-label={$('Expand')}
      aria-controls="${id}-content"
      id="${id}-header"
    >
      <Typography $>$</Typography>
    </AccordionSummary>
    <AccordionDetails>$</AccordionDetails>
  </Accordion>
)
