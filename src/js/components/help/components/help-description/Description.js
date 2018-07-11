import React from 'react'
import styled from 'styled-components'
import image from '../../../../../img/help-pages/getting-started.png'
import {Link} from 'react-router-dom'

const StyledDescription =styled.div`
  font-size: 15px;
  max width: 650px;
  line-height: 30px;
  margin: 2rem;
`

const Description = (props)=>{
  return(
    <StyledDescription className="help-description">
      {props.children}
    </StyledDescription>
  )
}

export default Description