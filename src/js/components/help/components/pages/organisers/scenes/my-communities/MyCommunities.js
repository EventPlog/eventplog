import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Desrciption from '../../../../help-description'
import Description from '../../../../help-description';
import {Link} from 'react-router-dom'

const StyledEventGuests=styled.div`

`
const MyCommunities = ()=>{
  return(
    <StyledEventGuests>
      <Sidebar/>
      <Topic>Guests</Topic>
      <Description>My guests</Description>
    </StyledEventGuests>
  )
}

export default MyCommunities