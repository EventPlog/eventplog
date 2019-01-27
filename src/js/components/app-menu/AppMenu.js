import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from 'styled-components'
import { lighten } from 'polished'
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
import logo from 'img/eventplog-logo-v10-alt.png'
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
      height: 100vh;
      overflow-y: scroll;
      background-color: ${props => lighten(0.47, props.theme.activeLink)};
      
      ${
        media.phone`
          padding-right: 0;
          background-color: ${props => props.theme.white};
        `
      }
    }
    
    .logo {
      padding: 1.2rem 1rem 1.2rem;
    }
    
    .sidebar.menu {
      height: 100vh;
      overflow-y: scroll;
      
      .item {
        color: ${props => props.theme.grayMedium};
        font-size: 90%; 
        
        &.sponsor {
          color: ${props => lighten(0.2, props.theme.yellow)};
        }
        
        &.divider {
          border-top: 3px solid;
          margin-top: 1.5rem;
          padding-top: 2rem;
        }
        
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
          margin: 2rem 0;
          
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
    background: #1b1c1c;
    cursor: pointer;
    font-size: 1.3rem;
    padding: 1rem;
  }
  
`
const AppMenu = ({
  showSidebar,
  isInternalPath,
  toggleSidebar,
  handleSidebarHide,
  user = {},
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
          visible={showSidebar}
          width='thin'
          onClick={() => isMobile && handleSidebarHide()}
        >

          <div className="sidebar-hold">
            <div className="logo-hold">
              <Link className="logo item" to="/">
                <img src={logo} alt='eventplog-logo' />
              </Link>

            </div>

            <MainMenu {...{toggleSidebar, user}} />

            {menu.items && menu.items.map(item => (
              item.name &&
              <NavLink className={`item ${item.className}`}
                       activeClassName="active"
                       to={item.link || '#'}>
                {item.icon && <Icon name={item.icon} />}
                {item.name}
              </NavLink>
            ))}

            <Nav>
              <Nav.Item className="sidebar-btn">
                <Button.Link to="/e/new">Create Event</Button.Link>
              </Nav.Item>
            </Nav>

            <Link className="item" to="/">
              <Icon name='home' />
              Home
            </Link>

            <NavLink className="item" to="/events">
              <Icon name='table tennis' />
              Events
            </NavLink>
            <NavLink className="item" to="/communities">
              <Icon name='users' />
              Communities
            </NavLink>
            <NavLink className="item" target="_blank" to="https://blog.eventplog.com">
              <Icon name='pencil' />
              Blog
            </NavLink>
          </div>
        </Sidebar>

        <Sidebar.Pusher dimmed={false && isMobile && showSidebar}
                        style={{paddingRight: !isMobile && showSidebar ? '150px': '0'}}
                        onClick={() => (showSidebar && isMobile && handleSidebarHide())}>
          <Segment basic>
            <div className="menu-btn" id="menuBtn" onClick={toggleSidebar}>
              <Icon name='content'  />
            </div>
            {children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </StyledAppMenu>
  )
}

export default AppMenu