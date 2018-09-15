// @flow

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';
import Sidebar from './components/sidebar';
import MainContent from './components/main-content-body'
import Sticky from 'js/components/shared/sticky'
import Loading from 'js/components/shared/loading'
import { media } from 'js/styles/mixins'
import { genEventLink } from 'js/utils'

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
  const { error, event, community } = props
  if (error) return <Loading.Error msg={error} />

  if (!event.id || community.loading || event.loading) {
    return <Loading/>
  }

  // Only community admins, event owner and event organizers have access
  if (!props.currentUser.id || !(event.is_stakeholder || event.organizer_role)) {
    return <Redirect to={`${genEventLink(event, community)}`} />
  }

  return (
    <StyledMain className="app-container">
      <Sidebar {...props} />
      <MainContent {...props} />
    </StyledMain>
  )
}

export default BackStage;