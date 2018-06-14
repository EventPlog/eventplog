import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'

const StyledEventOrganizers = styled.div`
  display: flex;
  justify-content: space-evenly; 
  
  ${
    media.phone`
      flex-direction: column;
    `
  }
  
  .organizer {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center; 
    
    &:not(:last-child) {
      ${
        media.phone`
          margin-bottom: 2rem;
        `
      }
    }
    
    .organizer-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-size: cover;
    }
  }
  
  .meta {
    margin-top: 0.5rem;
  }
  
  .title {
    font-weight: 700;
  }
  
  .body {
    color: #888;
  }
`
const EventOrganizers = ({ organizers}) => (
  <StyledEventOrganizers>
    {organizers && organizers.map(organizer =>
      <div className="organizer">
        <div className="organizer-img" style={{
          backgroundImage: `url(${organizer.avatar_url})`
        }} />
        <div className="meta">
          <div className="title">
            {`${organizer.first_name} ${organizer.last_name}`}
          </div>
          <div className="body">
            {organizer.occupation}
          </div>
        </div>
      </div>
    )}
  </StyledEventOrganizers>
)

export default EventOrganizers