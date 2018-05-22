import React from 'react'
import styled from 'styled-components'
import colors from '../../../../../theme/colors'
import welcomeImg from '../../../../../img/giphys/welcome.gif'
import peopleDancing from '../../../../../img/giphys/people-dancing.gif'

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > p {
    margin: 20px 0 50px;
  }
  
  > img {
    width: 500px;
    margin: 10px 0 100px;
  }
`

const MainContent = ({ status, token, confirmed }) => (
  <StyledMainContent className="main-content app-container">
    <h2>Keep track of your favorite communities</h2>
    <p>Know when they might host an event or share an event-related news</p>
  </StyledMainContent>
)

export default MainContent
