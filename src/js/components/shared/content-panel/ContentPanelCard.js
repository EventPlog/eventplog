import React from 'react'
import styled from 'styled-components'

// internal
import sampleCommunityImg from 'img/homepage-bg.JPG'
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'

const StyledMainContentCard = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
  margin: 1rem 0;
  display: flex; 
  
  ${
    media.phone`
      flex-direction: column;
      border: 1px solid #ddd;
      padding: 0 0 10px 0;
    `
  }
  
  .img-holder {
    width: 100px;
    margin-right: 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    
    ${
      media.phone`
        margin-bottom: 1rem;
        width: 100%;
        height: 200px;
        background-size: cover;
      `
    }
  }
  
  .card-body {
    color: #666;
    display: flex;
    flex-direction: column; 
    width: 100%;
    
    ${
      media.phone`
        padding: 0 1rem;
      `
    }
  }
  
  .card-title {
    font-weight: 400;
    font-size: 1.2em;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between; 
  
    a {
      color: #444;
      font-weight: 500;
    }
     
  }
  
  .card-description {
    margin-bottom: 0.5rem;
    color: #aaa;
    
    ${
      media.phone`
        margin: 0.7rem 0;
      `
    }
  }
  
  .card-meta {
    flex: 1;
    display: flex;
    align-items: baseline;
    flex-direction: column;
    
    ul {
      padding: 0;
      display: inline-flex;
      color: #aaa; 
      
      
      li:not(:last-child) {
        margin-right: 2rem;
      }
    }
    
    > * + * {
      margin-top: 0.5rem;
      
      ${
        media.phone`
          margin: 0.7rem 0;
        `
      } 
    }
  }

    
  button.img-btn {
    font-size: 0.7rem;
    background: #fff;
    border: none;
    box-shadow: 1px 2px 4px #444;
    position: absolute;
    bottom: 10px;
    
    ${
      media.tablet`
        width: 100%;
        height: 30px;
        padding: 0;
        bottom: 0;
      `
    }
    
    ${
      media.desktop`
        width: 100%;
        height: 30px;
        padding: 0;
        bottom: 0;
      `
    }
    
    ${
      media.phone`
        right: 10px
      `
    } 
  }
  
`

const MainContentCard = ({
  title,
  description,
  featured_image,
  showButton,
  btnText,
  meta
}) => (
  <StyledMainContentCard className="community-card">
    <div className="img-holder" style={{
              backgroundImage: `url(${featured_image || sampleCommunityImg})`
            }}>
      {showButton &&
        <Button className="img-btn hidden-md hidden-lg">
          {btnText}
        </Button>
      }
    </div>
    <div className="card-body">
      <div className="card-title">
        {title}
        {showButton && <Button className="hidden-xs">
          {btnText}
        </Button>}
      </div>
      <div className="card-description">
        {description}
      </div>
      <div className="card-meta">
        {meta}
      </div>
    </div>
  </StyledMainContentCard>
)

export default MainContentCard