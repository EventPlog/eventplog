import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import CommunitiesSection from '../communities-section'
import EventsSection from '../events-section'



const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  
  ${
    media.tablet`
      flex-direction: column;
    `
  }
  
    
  ${
  media.phone`
      flex-direction: column;
    `
  }
  .sidebar {
    width: 300px;
    /*background: #607d8b14;*/
    padding: 2rem;
    background: #eee;
    color: #aaa;
    border-radius: 10px;
    
    ${
      media.tablet`
        width: 100%;
      `
    }
    
    ${
      media.phone`
        width: 100%;
      `
    }
    
    .header {
      border-bottom: 1px solid #ccc;
      margin: 1rem 0;
      text-transform: uppercase;
    }
  }
  
  .main-body {
    flex: 1;
    
    ${
      media.phone`
        padding: 2rem;
      `
    }
  }
  
  img {
    max-width: 100px;
  }
  
  .communities-section {
    margin-bottom: 6rem;
    padding-right: 2rem;
    
    ${
      media.tablet`
        padding-right: 0;
      `
    }
    
    ${
      media.phone`
        padding-right: 0;
      `
    }  
    .header {
      border-bottom: 1px solid #ddd;
      padding-bottom: 5px;
    }
  }
  
  .sidebar {
  }
`

const MainContent = ({
  communities = [1,2,3],
  events = [1, 2]
}) => {
  return (
    <StyledMainContent>

      <section className="main-body">
        <CommunitiesSection title="My communities" {...{communities}} />
        <CommunitiesSection title="Other related communities" {...{communities}} />
      </section>

      <div>
        <div className="sidebar">
          <div className="header">
            Events you may like
          </div>
          <EventsSection {...{events}} />
        </div>
      </div>

    </StyledMainContent>
  )
}

export default MainContent