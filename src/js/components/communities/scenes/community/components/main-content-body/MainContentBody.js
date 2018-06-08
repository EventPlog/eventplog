import React, { Component } from 'react'
import styled from 'styled-components';

const StyledMainContent = styled.div`
  flex: 1;
  height: 30vh;
  margin-top: 100px
`

const MainContentBody = (props) =>
  <StyledMainContent>
    <h4>Community Page</h4>
  </StyledMainContent>

export default MainContentBody;
