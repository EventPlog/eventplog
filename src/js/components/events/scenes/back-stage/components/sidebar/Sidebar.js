import React from 'react';
import { NavLink } from 'react-router-dom';
import styled  from 'styled-components';
import { Icon } from 'semantic-ui-react'
import { lighten } from 'polished'

import defaults from 'js/styles/theme/variables';
import { media, maxMedia } from 'js/styles/mixins'
import colors from 'js/styles/theme/variables'
import { genEventLink } from 'js/utils'

const Aside = styled.aside`
  width: 200px;
  border-right: 1px solid ${colors.gray}; 
  background: ${props => props.theme.black};
  min-height: 50vh;

  ${
    media.tablet`
      width: 150px;
    `
  }
  
  ${
    media.phone`
      height: 50px;
      min-height: 0;
    `
  }
  
  > ul {
    margin: 100px 30px 0 0px;
    text-align: right;
    line-height: 60px;
    list-style: none;
    
    a {
      color: ${props => lighten(0.1, props.theme.activeLink)};
    }

    a.active {
      border-bottom: 1px solid ${defaults.activeLink};
      border-bottom: 1px solid var(--activeLink, ${defaults.activeLink});
      margin-bottom: 15px;
      padding: 0 0 15px 10px;
      color: ${colors.white};
      
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
  const isAdmin = community.is_owner || (event.organizer_role && (['admin', 'owner'].find(role => role == event.organizer_role.toLowerCase())))
  const menuItems = [
    (isAdmin ? {name: "Settings", icon: 'settings' } : {})
    { name: "Guests", icon: 'users' },
    { name: "Feedback", icon: 'send' },
    (isAdmin ? { name: "Planning", icon: 'file alternate outline', link: 'tasks' } : {}),
  ];
  return (
    <Aside className={className}>
      <ul>
        {
          menuItems.map(({name, icon, link}, index) =>
            name &&
            <li key={index}>
              <NavLink to={`${genEventLink(event, community)}/backstage/${link || name.toLowerCase()}`}
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
