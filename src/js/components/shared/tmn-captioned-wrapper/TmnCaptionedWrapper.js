import React from 'react'
import styled from 'styled-components'
//import backgroundImg from '../../../../img/homepage-bg.JPG';
import featuredImage from '../../../../img/TmnTracker-EventsPage.png';
//import PlanningPage from '../../../../img/TmnTracker-PlanningPage.png';

const StyledTmnCaptionedWrapper = styled.div`
  --local-bg: var(--bg, #2196f3ed);
  --local-fg: var(--fg, #fff);
  /*background-image: url(${featuredImage});*/
  height: 100vh;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  
  .overlay {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: 0.5;
    z-index: -1;
    
  }
  

  > .main-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
    
    .banner {
      color: var(--local-fg);
      background: var(--local-bg);
      height: 100%;
      justify-content: center;
      display: flex;
      flex-direction: column;
      padding: 50px;
      flex: 1;
      
      img {
        width: 30%;
        margin-bottom: 30px;
      }
      
      .title {
        font-size: 2em;
        line-height: 1.5em;
        margin-bottom: 10px;
        font-weight: 600;
        max-width: 80%;
      }
      
      .subtitle {
        font-size: 1.5em;
        font-weight: 400;
      }    
  
    }
  
    .form-holder {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--fg);
      flex: 1;
      max-width: 1000px;
      padding: 50px;
      
      > div {
        width: 100%;
      }
      
      .ui.form {
        border-radius: 10px;
        font-size: 2em;
        width: 100%;
        
        .field {
          line-height: 50px;
          color: #aaa;
          font-size: 0.8em;
          
          .button {
            color: #eee;
            background: #4CAF50;
            padding: 20px 30px;
            font-size: 0.8em;
          }
          
          label {
            font-weight: 400;
          }
        }
      }
    }
  }
  
`


const TmnCaptionedWrapper = ( { title, subtitle, iconImage, children }) =>
  <StyledTmnCaptionedWrapper>
    <div className="overlay" />
    <div className="main-content">
      <div className="banner">
        {iconImage && <img src={iconImage} alt=""/>}
        <span className="title">
          {title}
        </span>
        <p className="subtitle">
          {subtitle}
        </p>
      </div>
      <div className="form-holder">
        {children}
      </div>
    </div>
  </StyledTmnCaptionedWrapper>

export default TmnCaptionedWrapper
