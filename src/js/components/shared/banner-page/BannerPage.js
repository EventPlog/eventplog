import React from 'react'
import styled from 'styled-components'

// internal
import { media } from 'js/styles/mixins'

const StyledPage = styled.div`
  
  .banner {
    background-image: url('https://img.rwgenting.com/rwgenting/uploadedImages/Images/Casino/Highlights/Earn_and_Buy_Promotion/AOS-banner.jpg?n=3717');
    min-height: 9.25rem;
    margin-bottom: 4rem;
    display: flex;
    align-items: flex-end;

    .content {
      position: relative;
      padding: 2rem 1rem;
    }
    
    .title {
      color: ${props => props.theme.white};
    }
  }
`

const Search = ({title, bannerImage, children}) => (
  <StyledPage>
    <div>
      <div className="banner img-bg" style={bannerImage ? { backgroundImage: bannerImage } : {}}>
        <div className="overlay" />
        <div className="content app-container">
          <div className="caption">
            <h2 className="title">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <section className="app-container">
      {children}
    </section>
  </StyledPage>
)

export default Search