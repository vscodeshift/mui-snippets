import * as React from 'react'
import { colors, sizes, variants } from './muiButton'
import { SnippetOptions } from './index'

export const cardVariants = ['outlined', 'elevation']

export const description = 'MUI <Card>'

export const body = ({
  $,
  Components: { Card, CardContent, CardActions, Button },
}: SnippetOptions): React.ReactElement<any> => {
  return (
    <Card variant={$(cardVariants)} __oneLineProps $>
      <CardContent __multiLineChildren __optional>
        $
      </CardContent>
      <CardActions __optional>
        <Button
          variant={$(variants)}
          color={$(colors)}
          size={$(sizes)}
          onClick={$}
          __multiLineChildren
        >
          {$('Learn more')}
        </Button>
      </CardActions>
    </Card>
  )
}
