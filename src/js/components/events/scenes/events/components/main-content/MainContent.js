import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import EventsSection from '../events-section'
import CommunitiesSection from '../communities-section'
import Sidebar from 'js/components/shared/sidebar'


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
    margin-right: 2rem; 
    
    ${
      media.phone`
        margin: 2rem;
      `
    }
  }
  
  img {
    max-width: 100px;
  }
  
  .events-section {
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
  communities = [],
  events = [],
}) => {
  return (
    <StyledMainContent>

      <section className="main-body">
        <EventsSection title="Events you're interested in" {...{events}} />
        <EventsSection title="Events you may like" {...{events}} />
      </section>

      <Sidebar title="Other awesome communities">
        <CommunitiesSection {...{communities}} />
      </Sidebar>

    </StyledMainContent>
  )
}

export default MainContent