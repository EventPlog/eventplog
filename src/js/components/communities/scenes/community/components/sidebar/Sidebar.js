import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';
import styled, { ThemeProvider } from 'styled-components';
import defaults from 'js/styles/theme/variables';

const Aside = styled.aside`
  width: 200px;
  border-right: 1px solid #eee;
  height: 100vh;

  > ul {
    margin: 100px 30px 0 0px;
    text-align: right;
    line-height: 60px;
    list-style: none;

    .active {
      border-bottom: 1px solid ${defaults.activeLink};
      border-bottom: 1px solid var(--activeLink, ${defaults.activeLink});
      margin-bottom: 15px;
      padding: 0 0 15px 50px;
    }
    
    a {
      color: ${props => props.theme.fg};
    }
    
    > li {
    
    }
  }
`

Aside.defaultProps = {
}

const Sidebar = ({ themeColors, event = {} }) => {
  const menuItems = ["Tasks", "Check-in", "Guests", "Settings"];
  return (
      <Aside>
        <ul>
          {
            menuItems.map((menuItem, index) =>
              <li key={index}>
                <NavLink to={`/events/${event.id}/${menuItem.toLowerCase()}`}
                         activeClassName="active">
                  {menuItem}
                </NavLink>
              </li>
            )
          }
        </ul>
      </Aside>
  )

}

export default Sidebar;
