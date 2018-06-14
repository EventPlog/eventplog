import { css } from 'styled-components'

const sizes = {
  desktop: {min: 860, max: 5000},
  tablet: {min: 600, max: 860},
  phone: {min: 0, max: 600},
  featurePhone: {min: 0, max: 440}
}

// Iterate through the sizes and create a media template
/*
  @return rules that apply to max width. e.g.
  maxMedia.tablet applies to both phones and tablets
 */
const maxMedia = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (max-width: ${sizes[label].max / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})


const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${sizes[label].min / 16}em) and (max-width: ${sizes[label].max / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
export {
  media,
  maxMedia
}
