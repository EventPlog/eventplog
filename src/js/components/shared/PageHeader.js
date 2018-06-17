import React from 'react'
import { Header, Icon, Input, Segment } from 'semantic-ui-react'
import styled from 'styled-components';

const StyledPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  
  > h4.ui.header {
    margin: 0;
    padding-top: 10px;
    font-size: 1.07142857rem;
  }
`

const PageHeader = ({ title, icon }) => (
  <StyledPageHeader className="page-header">
    <Header as='h4'>
      <Icon name={icon || 'users'} />
      <Header.Content>
        {title}
      </Header.Content>
    </Header>
    <Input icon='search' placeholder='Search...' />
  </StyledPageHeader>
)

export default PageHeader;