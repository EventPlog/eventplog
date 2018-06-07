// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './components/sidebar';
import MainContent from './components/main-content-body'

const StyledMain = styled.div`
  flex: 1;
  display: flex;

  > .container {
    flex: 1;
  }
`;

type Props = {
  defaultTheme: object,
};

const Main = (props) => (
  <StyledMain>
    <Sidebar {...props} />
    <MainContent {...props} />
  </StyledMain>
)

export default Main;