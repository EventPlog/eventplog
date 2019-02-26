import React from 'react'
import styled from 'styled-components'

// internal
import { media } from 'js/styles/mixins'

const defaultBgImage = 'https://res.cloudinary.com/eventplog/image/upload/c_scale,w_auto,dpr_auto/v1550144548/comments/AOS-banner_hj0jd0.jpg'

const StyledPage = styled.div`
  
  .banner {
    position: relative;
    min-height: 9.25rem;
    margin-bottom: 4rem;
    display: flex;
    align-items: flex-end;

    .content {
      position: relative;
      padding: 2rem 1rem;
    }
    
    .title, .title a:not(.btn) {
      color: ${props => props.theme.white};
      font-family: "Poppins", "Open Sans";
      font-size: 2.5rem;
      line-height: 1.28571429em;
    }
  }
  
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: 0.3;
  }
`

const BannerPage = ({title, bannerImage, children}) => (
  <StyledPage>
    <div>
      <div className="banner img-bg" style={{
          backgroundImage: `url(${bannerImage || defaultBgImage})`
      }}>
        <div className="overlay" />
        <div className="content app-container">
          <div className="caption">
            <div className="title">
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="app-container">
      {children}
    </section>
  </StyledPage>
)

export default BannerPage