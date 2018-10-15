import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

// =========== INTERNAL ============
import Resources from 'js/components/resources/components/resources'
import { media } from 'js/styles/mixins'
import sharedStyles from '../sharedStyles'

const StyledResources = styled.div`
  ${sharedStyles}
`

import Auth from 'js/auth'

const MyResources = ({
  user,
  currentUser,
  resources,
  labelVerbMapping = [],
  activeItem,
  handleItemClick,
}) => {

  return (
    <StyledResources>
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
            <Resources title="All resources"
                       currentUser={currentUser}
                       resources={resources} />
          </Segment>
        </Grid.Column>
      </Grid>
    </StyledResources>
  )
}

export default MyResources