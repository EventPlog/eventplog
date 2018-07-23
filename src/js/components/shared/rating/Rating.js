import React from 'react'
import { Rating } from 'semantic-ui-react'

const RatingExampleHeart = ({
  value = 1,
  max = 5,
  icon = 'heart',
  onRate
}) => (
  <Rating icon={icon}
          defaultRating={value}
          onRate={onRate}
          maxRating={max} />
)

export default RatingExampleHeart