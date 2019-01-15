import React from 'react'
import styled, { css } from 'styled-components'

// internal
import { media } from 'js/styles/mixins'
import ContentSection from 'js/components/shared/content-section'
import { validDate, pluralize, genEventLink } from 'js/utils'
import ImageUploader from 'js/components/shared/image-uploader'

const eventBannerStyles = css`
  min-height: 200px;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem;
  padding-bottom: 4rem; 
  margin: 0;
  background-size: cover;

  ${
    media.phone`
      flex-direction: column;
    `
  } 
  
  ${
    media.desktop`
      min-height: 600px;
    `
  }
  
  .overlay {
    opacity: 0.3;
  }
  
  > *:not(.overlay) {
    z-index: 1;
    position: relative;
  }
  
  .content {
    color: white;
    text-shadow: 0px 2px 4px #000;
    flex: 1;
    display: flex;
    flex-direction: column; 
    flex-direction: row;
    align-items: flex-end; 
    
    ${
      media.phone`
        width: 100%;
      `
    }
    
    .title {
      font-size: 3rem;
      font-weight: 500;
      margin-top: 4rem;
      line-height: initial;
      color: #eee; 
    
      ${
        media.desktop`
          font-size: 5rem;
        `
      }
    }
    
    .meta {
      letter-spacing: 0.6px;
      font-weight: 600;
      font-size: 1.2rem;
      
      ${
        media.desktop`
          letter-spacing: 0.6px;
          font-weight: 300;
          font-size: 2rem;
          line-height: 2rem;
          color: ${props => props.theme.gray};
        `
      }
    }
    
  }
  
  .cta-btns {
    display: flex;
    flex-direction: column;
    
    ${
      media.phone`
        align-self: flex-start;
      `
    }
  }
  
  .quick-menu-holder {
    background: rgba(0,0,0,0.5);
    width: 100%;
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 0
    
    ${
      media.phone`
        margin: 0;
      `
    }
  }
  
  .ui.fluid.item.menu {
    margin: 0;
    background-color: transparent;
    border-radius: 0;
    opacity: 0.9;
    
    a {
      color: ${props => props.theme.gray};
      
      &:hover {
        color: var(--activeLink);
      }
    }
  }
  
  .upload-btn-controls {
    position: absolute;
    top: 2rem;
    
    input, button {
      margin-right: 1rem;
      color: white;
      border: 1px solid white;
    }
    
    i {
      color: white;
      font-size: rem;
    }
    
    .save-btn:not(:hover) {
      background: ${props => props.theme.green};
    }
  }
  
  button {
    border-color: #fff;
    color: #fff;
    padding: 1rem;
  }
  
  .save-btn {
    background: ${props => props.theme.green};
  }
  
  .cancel-btn {
    margin-left: 1rem;
    background: ${props => props.theme.red};
  }
`


const EventBanner = ({
  id,
  featured_image,
  handleChange,
  handleSubmit,
  event,
  className,
  imagePlaceholderRef,
}) => {

  return (
    <ContentSection.FullRow className={`banner img-bg ${className}`} style={{
          backgroundImage: `url(${event.featured_image || '/login-bg.jpg'})`
        }}>
      <div className="overlay" />

      {event.is_stakeholder &&
        <span className="upload-btn-controls">
                <ImageUploader setImage={(image) => handleChange('featured_image', image)}
                               currentImage={event.featured_image}
                               persistImage={handleSubmit}
                               imagePlaceholderRef={imagePlaceholderRef} />
        </span>
      }

    </ContentSection.FullRow>
  )
}

const StyledEventBanner= styled(EventBanner)`
  ${ eventBannerStyles }
`
export default StyledEventBanner;