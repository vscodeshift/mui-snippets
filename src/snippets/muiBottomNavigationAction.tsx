import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <BottomNavigationAction>'

export const body = ({
  Components: { BottomNavigationAction },
  $,
}: SnippetOptions): React.ReactElement<any> => (
  <BottomNavigationAction label="$" value={$} icon={$} $ />
)
