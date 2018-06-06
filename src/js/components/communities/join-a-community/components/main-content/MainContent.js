import React from 'react'
import styled from 'styled-components'
import defaults from '../../../../../../styles/theme/variables'
import { Form, Label, Select } from 'semantic-ui-react'
import CommunityCard from '../community-card'

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h2 {
    color: ${defaults.grayLight};
  }
  
  > p {
    margin: 20px 0 50px;
    font-size: 1.2rem;
    font-weight: 300;
  }
  
  .selection {
    width: 100%;
    
    .selection-dropdown {
      display: flex;
      justify-content: space-around;
      margin: 30px 0;
    }
  },
  
  
`
const locationOptions = [
  { key: 'lagos', text: 'Lagos', value: 'lagos' },
  { key: 'abuja', text: 'Lagos', value: 'abuja' },
]

const focusOptions = [
  { key: 'tech', text: 'Technology', value: 'Technology' },
  { key: 'software', text: 'Software', value: 'Software' },
]

const MainContent = ({
  communities = [],
  handleLocationSelect,
  handleFocusChange,
  handleChange
}) => (
  <StyledMainContent className="main-content app-container">
    <h2>Follow your favorite communities</h2>
    <p>To know when they might host an event or share an event-related news</p>
    <div className="selection">
      <div className="selection-dropdown">
        <Form.Field>
          <label>Active location:</label>
          <Select onChange={(e) => handleChange(e, 'gender')}
                  defaultValue='Lagos'
                  placeholder='State' options={locationOptions} />
        </Form.Field>

        <Form.Field>
          <label>Community focus: </label>
          <Select onChange={(e) => handleChange(e, 'gender')}
                  defaultValue='Technology'
                  placeholder='Gender' options={focusOptions} />
        </Form.Field>
      </div>
      <div className="options">
        { !!communities && communities.map(community =>  (
          <CommunityCard {...community} />
        ))
        }
      </div>
    </div>
  </StyledMainContent>
)

export default MainContent
