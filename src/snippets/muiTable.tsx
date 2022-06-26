import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <Table>'

export const body = ({
  $,
  Components: {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
  },
}: SnippetOptions): React.ReactElement<any> => {
  return (
    <TableContainer component={Paper} __optional>
      <Table aria-label={$('simple table')} __multiLineChildren __oneLineProps>
        <TableHead __optional>
          <TableRow __multiLineChildren>
            <TableCell>$</TableCell>
            <TableCell align={$('right')}>$</TableCell>
            <TableCell align={$('right')} __optional>
              $
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody __multiLineChildren __optional>
          <TableRow>
            <TableCell component={$('th')} scope={$('row')}>
              $
            </TableCell>
            <TableCell align={$('right')}>$</TableCell>
            <TableCell align={$('right')} __optional>
              $
            </TableCell>
          </TableRow>
          <TableRow __optional>
            <TableCell component={$('th')} scope={$('row')}>
              $
            </TableCell>
            <TableCell align={$('right')}>$</TableCell>
            <TableCell align={$('right')} __optional>
              $
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
