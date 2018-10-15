import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

// =========== INTERNAL ============
import EditUser from 'js/components/user/scenes/edit-user'
import { mixins } from 'js/styles/mixins'
import sharedStyles from '../sharedStyles'

const StyledSettings = styled.div`
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
    <StyledSettings>
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
            <EditUser/>
          </Segment>
        </Grid.Column>
      </Grid>
    </StyledSettings>
  )
}

export default MyResources