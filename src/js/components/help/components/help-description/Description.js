import React from 'react'
import styled from 'styled-components'
import image from '../../../../../img/help-pages/help login page desktop.jpg'
import {Link} from 'react-router-dom'

const StyledDescription =styled.div`
.help-description{
  font-size: 15px;
  max width:650px;
}
`

const Description = (props)=>{
  return(
    <StyledDescription>
      <div className="help-description">{props.children}</div>
    </StyledDescription>
  )
}

export default Description