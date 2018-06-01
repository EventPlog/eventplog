import { css } from 'styled-components'

const sizes = {
  desktop: 1200,
  tablet: 860,
  phone: 600
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export {
  media
}