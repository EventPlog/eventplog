// @flow

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';
import Sidebar from './components/sidebar';
import MainContent from './components/main-content-body'
import Sticky from 'js/components/shared/sticky'
import Loading from 'js/components/shared/loading'
import { media } from 'js/styles/mixins'

const StyledMain = styled.div`
  flex: 1;
  display: flex;
  
  &.app-container {
    padding: 0 2rem;
    align-items: end;
    align-items: stretch;
    
    ${
      media.phone`
        padding: 0;
      `
    }
  }

  > .container {
    flex: 1;
  }
`;

type Props = {
  defaultTheme: object,
};

const BackStage = (props) => {
  if (props.loading) return <Loading />
  if (props.error) return <Loading.Error msg={props.error} />

  // Only community admins, event owner and event organizers have access
  if (!props.currentUser.id || !(props.event.is_stakeholder || props.event.organizer_role)) {
    return <Redirect to={`/communities/${props.event.community_id}/events/${props.event.id}`} />
  }
  return (
    <StyledMain className="app-container">
      <Sidebar {...props} />
      <MainContent {...props} />
    </StyledMain>
  )
}

export default BackStage;