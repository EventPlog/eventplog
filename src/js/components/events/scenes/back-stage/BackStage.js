// @flow

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';
import Sidebar from './components/sidebar';
import MainContent from './components/main-content-body'
import Sticky from 'js/components/shared/sticky'
import Loading from 'js/components/shared/loading'

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

const Main = (props) => {
  if (props.community.loading || props.event.loading) {
    return <Loading />
  }
  // Only ommunity admins, event owner and event organizers have access
  if (!props.currentUser.id || !(props.community.is_owner || props.event.is_owner || props.event.is_organizer)) {
    return <Redirect to={`/communities/${props.community.id}/events/${props.event.id}`} />
  }
  return (
    <StyledMain className="app-container">
      <Sidebar {...props} />
      <MainContent {...props} />
    </StyledMain>
  )
}

export default Main;