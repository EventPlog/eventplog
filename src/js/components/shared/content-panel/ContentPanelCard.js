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
    width: 100%;
    height: 200px;
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
    align-self: center;
    
    ${
      media.phone`
        /*padding: 0 1rem;*/
      `
    }
  }
  
  .card-title {
    font-weight: 400;
    font-size: 1.7rem;
    margin-bottom: 0.1rem;
    display: flex;
    justify-content: space-between; 
    align-items :flex-end;
    margin-bottom: 0.5rem;
    line-height: initial;
  
    a {
      color: #444;
      font-weight: 500;
    }
    
    ${
      media.phone`
        font-size: 1.2rem;
      `
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
    
    p {
      margin: 0.4rem 0;
      line-height: 1.5;
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
      flex-direction: column;
      color: #aaa; 
      margin: 0.1rem;
      font-size: 90%;
      
      &.row {
        flex-direction: row;
      }
      
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
    font-size: 1rem;
    
    padding: 0.8rem;
    background: #fff;
    border: none;
    box-shadow: 1px 2px 4px #444;
    position: absolute;
    left: 10px;
    bottom: 10px;
    
    &:hover {
      background: var(--activeLink);
    }
    
    ${
      media.tablet`
      `
    }
    
    ${
      media.desktop`
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
  showButton = true,
  hideImage,
  btn = {},
  meta,
  titleLink,
  className,
}) => (
  <StyledMainContentCard className={`community-card ${className}`}>
    {!hideImage &&
      <div className="img-holder" style={{
                backgroundImage: `url(${featured_image || '/public/sample-bg.jpg'})`
              }}>
        {titleLink
          ? <Link className="title-link" to={titleLink} />
          : <span className="title-link">{titleLink}</span>
        }
        <div>
          {showButton && btn.onClick &&
          <Button {...btn} className={`img-btn hidden-md ${btn.className}`}>
            {btn.icon}  {btn.text}
          </Button>
          }
        </div>
      </div>
    }
    <div className="card-body">
      <div className="card-title">
        {title}
        {hideImage && showButton && btn && <Button {...btn} className={`hidden-xs ${btn.className}`}>
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
        {hideImage && showButton && btn.onClick &&
          <Button {...btn} className={`hidden-md hidden-lg footer-btn ${btn.className}`}>
            {btn.icon}  {btn.text}
          </Button>
        }
      </div>
    </div>
  </StyledMainContentCard>
)

export default MainContentCard