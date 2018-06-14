import React from 'react'
import styled from 'styled-components'
import defaults from 'js/styles/theme/variables'
import ContentBeforeCommunitySubmit from '../content-before-community-submit'
import ContentAfterCommunitySubmit from '../content-after-community-submit'

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  
  h3 {
    color: ${defaults.grayMedium};
  }
  
  > p {
    margin: 20px 0 50px;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.9rem;
  }
  
`


const MainContent = ({
  community,
  error,
  loading,
  communityCreated,
  handleChange,
  submitCommunity
}) => (
    <StyledMainContent className="main-content app-container">
      { !communityCreated &&
        <ContentBeforeCommunitySubmit {...{loading, error, community, handleChange, submitCommunity}} />}

      { communityCreated && <ContentAfterCommunitySubmit {...{community, handleChange}} /> }
    </StyledMainContent>
    )

    export default MainContent
