import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// internal
import { media } from 'js/styles/mixins'
import Button from 'js/components/shared/button'

import sampleCommunityImg from 'img/devc-team.png'

const StyledCommunitySection = styled.div`
  > ul {
    margin: 2rem;
    
    ${
      media.tablet`
        margin: 0;
      `
    }
    
        
    ${
      media.phone`
        margin: 0;
      `
    }
  }
  
  .community-card {
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
    margin: 1rem 0;
    display: flex; 
    
    ${
      media.phone`
        flex-direction: column;
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
      
      position: relative
    
      a {
        color: #888;
        font-weight: 600;
      }
       
      button {
        position: absolute;
        right: 0;
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
      align-items: flex-end;
      
      ul {
        padding: 0;
        display: inline-flex;
        color: #aaa; 
        
        ${
          media.phone`
            margin: 0
          `
        } 
        
        li:not(:last-child) {
          margin-right: 2rem;
        }
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

const CommunitySection = ({ title, communities }) => (
  <StyledCommunitySection className="communities-section">
    <h5 className="header">{ title }</h5>
    <ul>
      {communities && communities.map(community =>
        <li>
          <div className="community-card">
            <div className="img-holder" style={{
              backgroundImage: `url(${sampleCommunityImg})`
            }}>
              <Button className="img-btn hidden-md hidden-lg">
                Join
              </Button>
            </div>
            <div className="card-body">
              <div className="card-title">
                <Link to="/communities/1">
                  Facebook Developer Circles Lagos
                </Link>
                <Button className="hidden-xs">
                  Join
                </Button>
              </div>
              <div className="card-description">
                A community united in knowledge sharing about everything in tech.
              </div>
              <div className="card-meta">
                <ul>
                  <li>
                    220 followers
                  </li>
                  <li>
                    1 upcoming event
                  </li>
                  <li>
                    <span className="meta-label">Focus</span>: Technology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      )}
    </ul>
  </StyledCommunitySection>
)

export default CommunitySection