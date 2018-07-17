import React from 'react'
import {Link} from 'react-router-dom'
import { Breadcrumb } from 'semantic-ui-react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { media } from 'js/styles/mixins'

const StyledBreadCrumb = styled.div`
  border-bottom: 1px solid ${props => lighten(0.4, props.theme.fg)};
  
  .app-container {
    padding: 1rem 2rem;
  }
  
  .ui.breadcrumb {
    line-height: 1.3rem;
    
    ${
      media.phone`
        flex-direction: row
      `
    }
    
    a {
      color: var(--activeLink);
    }
  }
`

const BreadcrumbComponent = (props) => {
  const paths = props.pathname.split('/').map((path, index, arr) => {
    if (index === 0) return {
      key: index,
      content: (<Link to={'/'}>home</Link>),
      active: (index === arr.length - 1),
      link: (index < arr.length - 1)
    };

    if (index === arr.length - 1) return {
      key: index,
      content: path,
    };

    return {
      key: index,
      content: (<Link to={`${arr.slice(0, index + 1).join('/')}`}>{path}</Link>),
      active: (index === arr.length - 1),
      link: (index < arr.length - 1)}
    }
  )

  return (
    <StyledBreadCrumb>
      <div className="app-container">
        <Breadcrumb size='tiny' sections={paths} />
      </div>
    </StyledBreadCrumb>
  )
}

export default BreadcrumbComponent