import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Icon } from 'semantic-ui-react'

import defaults from 'js/styles/theme/variables';
import { media, maxMedia } from 'js/styles/mixins'

const Aside = styled.aside`
  width: 200px;
  border-right: 1px solid #eee;
  height: 100vh;
  background: #eee;

  ${
    media.tablet`
      width: 150px;
    `
  }
  
  ${
    media.phone`
      height: 50px;
    `
  }
  
  > ul {
    margin: 100px 30px 0 0px;
    text-align: right;
    line-height: 60px;
    list-style: none;

    .active {
      border-bottom: 1px solid ${defaults.activeLink};
      border-bottom: 1px solid var(--activeLink, ${defaults.activeLink});
      margin-bottom: 15px;
      padding: 0 0 15px 10px;
      color: #444;
      
      ${
        media.phone`
          padding: 0.5rem;
          border-bottom: none;
        `
      }
    }
    
    
    ${
      media.phone`
        display: flex;
        font-size: 90%;
        margin: 0 2rem;
        justify-content: space-between;
        line-height: 50px;
      `
    }
    
    i {
      margin-right: 1rem;
    }
  }
`

Aside.defaultProps = {
}

const Sidebar = ({
  className,
  community = {},
  event = {}
}) => {
  const menuItems = [
    { name: "Tasks", icon: 'settings' },
    { name: "Guests", icon: 'users' },
    { name: "Feedback", icon: 'send' },
    {name: "Settings", icon: 'settings' }
  ];
  return (
    <Aside className={className}>
      <ul>
        {
          menuItems.map(({name, icon}, index) =>
            <li key={index}>
              <NavLink to={`/communities/${community.id}/events/${event.id}/backstage/${name.toLowerCase()}`}
                       activeClassName="active">
                <span className="hidden-xs">
                  <Icon name={icon || 'users'} />
                </span>
                {name}
              </NavLink>
            </li>
          )
        }
      </ul>
    </Aside>
  )

}

export default Sidebar;
