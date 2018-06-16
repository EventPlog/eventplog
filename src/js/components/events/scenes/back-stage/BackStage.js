// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './components/sidebar';
import MainContent from './components/main-content-body'

const StyledMain = styled.div`
  flex: 1;
  display: flex;
  
  &.app-container {
    align-items: end;
  }

  > .container {
    flex: 1;
  }
`;

type Props = {
  defaultTheme: object,
};

const Main = (props) => (
  <StyledMain className="app-container">
    <Sidebar {...props} />
    <MainContent {...props} />
  </StyledMain>
)

export default Main;