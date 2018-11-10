import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// internal
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'

const StyledMainContentCard = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
  margin: 1rem 0;
  display: flex; 
  
  ${
    media.phone`
      /*flex-direction: column;
      border: 1px solid #ddd;
      padding: 0 0 10px 0;*/
    `
  }
  
  .img-holder {
    width: 100px;
    height: 100px;
    margin-right: 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    
    ${
      media.phone`
        /*margin-bottom: 1rem;
        width: 100%;
        height: 200px;
        background-size: cover;
        background: ${props => props.theme.gray}*/
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
        /*padding: 0 1rem;*/
      `
    }
  }
  
  .card-title {
    font-weight: 400;
    font-size: 1.2em;
    margin-bottom: 0.1rem;
    display: flex;
    justify-content: space-between; 
    align-items :flex-end;
  
    a {
      color: #444;
      font-weight: 500;
    }
     
  }
  
  .card-description {
    margin-bottom: 0.1rem;
    color: #aaa;
    font-size: 90%;
    
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
      margin: 0.1rem;
      font-size: 90%;
      
      
      li:not(:last-child) {
        margin-right: 1rem;
      }
    }
    
    > * + * {
      margin-top: 0.1rem;
      
      ${
        media.phone`
          margin: 0.7rem 0;
        `
      } 
    }
  }

    
  button.img-btn {
    font-size: 0.7rem;
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
        margin: 0;
        margin-top: 0.5rem;
      `
    } 
  }
   
  .title-link {
    width: 100%;
    height: 100%;
    display: block;
  }
   
`

const MainContentCard = ({
  title,
  description,
  featured_image,
  showButton,
  btn = {},
  meta,
  titleLink,
  className,
}) => (
  <StyledMainContentCard className={`community-card ${className}`}>
    <div className="img-holder" style={{
              backgroundImage: `url(${featured_image || '/public/sample-bg.jpg'})`
            }}>
      <Link className="title-link" to={titleLink || "#"} />
    </div>
    <div className="card-body">
      <div className="card-title">
        {title}
        {showButton && btn && <Button {...btn} className="hidden-xs">
          {btn.icon}  {btn.text}
        </Button>}
      </div>
      <div className="card-description">
        {description}
      </div>
      <div className="card-meta">
        {meta}
      </div>
      <div>
        {showButton && btn.onClick &&
        <Button {...btn} className="img-btn hidden-md hidden-lg">
          {btn.icon}  {btn.text}
        </Button>
        }
      </div>
    </div>
  </StyledMainContentCard>
)

export default MainContentCard