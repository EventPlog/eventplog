import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import HelpDescription from './components/help-description'
import HelpTopics from './components/help-topics'

const StyledHelpPage =styled.div`
.help-page{
  display:flex;
  margin:50px;
  font-size: 18px;
}

`
const HelpPage =()=>{
  return(
    <StyledHelpPage>
      <div className="help-page">
        <HelpTopics/>
        <HelpDescription/>
    </div>
  </StyledHelpPage>
  )
}

export default HelpPage