import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from 'styled-components'
import {
  Icon,
  Image,
  Menu,
  Segment,
  Dropdown,
  Sidebar,
  Sticky
} from 'semantic-ui-react'

import Button from 'js/components/shared/button'
import Header from 'js/components/header'
import logo from 'img/eventplog-logo-name-inverted-small-v2.png'
import { genUserProfileLink } from 'js/utils'
import MainMenu from 'js/components/header/logged-in-header/MainMenu'
import { media } from 'js/styles/mixins'
import Nav from 'js/components/shared/nav'

const StyledAppMenu = styles.div`
  .ui.segment.pushable {
    margin: 0;
    border: none;
    border-radius: 0;
    
    
    .pusher {
      padding-right: 150px;
      
      ${
        media.phone`
          padding-right: 0;
        `
      }
    }
    
    .logo {
      padding: 2rem 1rem;
    }
    
    .sidebar .item {
      color: ${props => props.theme.grayMedium};
      font-size: 90%; 
      
      ${
        media.desktop`
          flex-direction: row;
          display: flex;
          align-items: center;
          text-align: left;
          
          .icon:not(.dropdown) {
            margin: 0 0.5rem 0 0 !important;
          }
        `
      }
      
      &:hover {
        color: var(--activeLink);
      }
    }
    
    .ui.basic.segment {
      padding: 0;
    }
  }
  
  .app-header {
    border: none;
  }
  
  .ui.thin.left.sidebar, .ui.thin.right.sidebar {
    /* width: 170px; */
    
    .menu > ul {
      flex-direction: column-reverse;
      margin: 0;
      
      li {
        margin: 1rem 0;
        
        a {
          border-color: #eee;
          color: #eee;
          padding: 1rem;
        }
        
        
        &.sidebar-btn {
          margin: 3rem 0;
          
          &.login {
            display: inline-block;
            margin: 2rem;
          }
          
          a {
            display: inline-block
          } 
        }
        
        &.user-profile {
          padding: 0;
          background: #444;
          margin-top: 0;
          
          ${
            media.phone`
              padding: 1rem 0 0;
            `
          } 
        }
      }
    }
    
    .right.menu  {
      .dropdown.item > .icon {
        display: none
      }
      
      .menu.transition.visible a {
        color: var(--activeLink);
      }
    }
    
  }
  
  .menu-title {
    font-size: 1.4rem;
    padding-left: 1rem;
    
    ${
      media.desktop`
        text-align: left;
      `
    }
  }
  
  .logo-hold {
    display: flex;
    width: 100%;
    
    .logo {
      max-width: 100%;
    }
  }
  
  .menu-btn {
    position: fixed;
    color: ${props => props.theme.gray};
    z-index: 10000;
    top: 0;
    left: 0;
    background-color: var(--activeLink);
    cursor: pointer;
    font-size: 1.3rem;
    padding: 1rem;
  }
`
const AppMenu = ({
  visible,
  isInternalPath,
  toggleSidebar,
  handleSidebarHide,
  user,
  menu = {},
  isMobile,
  contextRef,
  handleContextRef,
  children,
}) => {
  return (
    <StyledAppMenu>
      {false && isInternalPath &&
        <Header toggleSidebar={toggleSidebar} />}

      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='slide out'
          icon='labeled'
          inverted
          onHide={handleSidebarHide}
          vertical
          visible={!isMobile || visible}
          width='thin'
          onClick={handleSidebarHide}
        >

          <div className="logo-hold">
            <Link className="logo item" to="/">
              <img src={logo} alt='eventplog-logo' />
            </Link>

          </div>

          <MainMenu {...{toggleSidebar, user}} />

          {menu.title && <h4 className="menu-title">{menu.title}</h4>}
          {menu.items && menu.items.map(item => (
            item.name &&
              <Link className="item" to={item.link || '#'}>
                {item.icon && <Icon name={item.icon} />}
                {item.name}
              </Link>
          ))}

          <Nav>
            <Nav.Item className="sidebar-btn">
              <Button.Link to="/events/new">Create Event</Button.Link>
            </Nav.Item>
          </Nav>

          <Link className="item" to="/events">
            <Icon name='table tennis' />
            Events
          </Link>
          <Link className="item" to="/communities">
            <Icon name='users' />
            Communities
          </Link>

        </Sidebar>

        <Sidebar.Pusher dimmed={isMobile && visible}
                        onClick={() => (visible && handleSidebarHide())}>
          <Segment basic>
            {isMobile &&
              <div className="menu-btn">
                <Icon name='content' onClick={toggleSidebar} />
              </div>
            }
            {children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </StyledAppMenu>
  )
}

export default AppMenu