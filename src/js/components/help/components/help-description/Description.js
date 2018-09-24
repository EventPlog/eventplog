import React from 'react'
import styled from 'styled-components'
import image from '../../../../../img/help-pages/getting-started.png'
import {Link} from 'react-router-dom'

const StyledDescription =styled.div`
  font-size: 1.1em;
  line-height: 30px;
  margin: 2rem auto;
  max-width: 800px;
`

const Description = (props)=>{
  return(
    <StyledDescription className="help-description">
      {props.children}
    </StyledDescription>
  )
}

export default Description