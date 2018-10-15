import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

// =========== INTERNAL ============
import CommunitiesSection from 'js/components/communities/scenes/communities/components/communities-section'
import sharedStyles from '../sharedStyles'

const StyledCommunities = styled.div`
  ${sharedStyles}
`

import Auth from 'js/auth'

const MyCommunities = ({
  user,
  labelVerbMapping = [],
  communities,
  getCommunities,
  activeItem,
  followCommunity,
  handleItemClick,
}) => {


  return (
    <StyledCommunities>
      <Grid className='app-container'>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            {
              Object.keys(labelVerbMapping).map(item => (
                <Menu.Item
                  name={item}
                  active={activeItem === item}
                  onClick={handleItemClick}
                />
              ))
            }
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <CommunitiesSection showCTA={!Auth.isLoggedIn}
              {...{communities, getCommunities, followCommunity}} />
          </Segment>
        </Grid.Column>
      </Grid>
    </StyledCommunities>
  )
}

export default MyCommunities