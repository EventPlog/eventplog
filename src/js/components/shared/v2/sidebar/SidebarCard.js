// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// internal
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'
import colors from 'js/styles/theme/colors';
import { lighten } from 'polished'
import { hexToRgb } from 'js/utils'

// images


const StyledSidebarCard = styled.div`
  margin: 1.5rem 0;
  background: white;
  border-radius: 10px;
 
  
  ${
    media.tablet`
      display: flex;
      flex-direction: row-reverse;
      padding: 1rem;
    `
  }
  
  ${
    media.featurePhone`
      display: block;
    `
  }
  
  .card-body {
    padding: 1rem;
    border-radius: 0;
    border-bottom: 1px solid #ccc;
    
    ${
      media.tablet`
        flex: 1;
        align-items: baseline;
        display: flex;
        flex-direction: column;
      `
    }
  }
  
  .img-holder {
    width: 100%;
    height: 100px;
    background-size: contain;
    position: relative;
    height: auto;
    border-radius: 8px;
    background-color: ${props => props.bgColor || props.theme.activeLink};
    background-image: ${props => `linear-gradient(to bottom left, ${hexToRgb(props.bgColor || props.theme.activeLink, 0.4) } 0%, ${hexToRgb(props.bgColor || props.theme.activeLink, 0.9)} 50%), url(${props.image})`};
    
    > * {
      position: relative;
      text-shadow: 0px 0px 2px ${props => props.theme.darkGray};
    }
  
    ${
      media.tablet`
        flex: 1;
        width: auto;
      `
    }
    
    ${
      media.featurePhone`
        // height: 100px;
      `
    }
  }
  
  .title-link {
    width: 100%;
    height: 100%;
    display: block;
  }
  
  .card-title {
    margin: 0 0 0.2rem;
    font-weight: 100;
    font-weight: 800;
    padding: 10px;
    font-size: 1.5rem;
    line-height: 25px;
    letter-spacing: 0.4px;
    color: #fff;

    a {
      color: #fff;
      font-weight: 800;
      
      ${
        media.tablet`
          letter-spacing: 0.5px; 
        `
      }
    }
  }
  
  .card-description, .card-meta {
    font-size: 0.9rem;
    margin: 0;
    color: ${props => lighten(0.2, props.theme.darkGray)};
    
    a {
      color: ${props => lighten(0.2, props.theme.darkGray)};
      font-weight: bold;
    }
  }
  
  .card-description {
  }
  
  .card-meta {
    ${
      media.tablet`
        flex: 1;
        display: flex;
        align-items: flex-end;
      `
    } 
  }
  
  button {
    font-size: 0.7rem;
    // padding: 0.8rem;
    background: #fff;
    border: none;
    box-shadow: 1px 2px 4px #444;
    position: absolute;
    right: 10px;
    top: 20px;
    // bottom: 84px;
    border-radius: 17px;
  }

  .follow {
    padding: 20px 13px 13px;
    color: white;
    line-height: 23px;
    font-size: 15px;

    span {
      font-size: 2rem;
      font-weight: 600;
    }
  }
  .count {
    display: block;
  }

  .categories {
    color: white;
    padding-left: 13px;
    padding-bottom: 20px;
    padding-top: 16px;
    
    a {
      color: white;
      text-decoration: underline;
    }
  }
`

type itemType = {
  title: string,
  description: string,
  featuredImage?: string,
  children: any
}
const SidebarCard = ({
  id,
  title,
  description,
  featured_image,
  no_of_followers,
  btn = {},
  meta,
  titleLink,
  brand_color,
  theme,
}: itemType) => (
  <StyledSidebarCard className="sidebar-card"
                     bgColor={brand_color || colors.primary}
                     image={featured_image || "https://placeimg.com/640/480/tech"}>
    <div className="img-holder">
      <div className="follow">
        {meta}
        <Link className="title-link" to={titleLink || "#"} />
        {btn.text && <Button {...btn}>
                      {btn.text}
                    </Button>}
    </div>

    <div className="card-title">
      {title}
    </div>

    <div className="categories">
      {description}
    </div>
    </div>
  </StyledSidebarCard>
)

export default SidebarCard