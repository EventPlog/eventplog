import React, { Component }  from 'react'
import logo from 'img/eventplog-logo-v13.png'
import colors from '../../../styles/theme/colors'
import { Menu, Input, Icon, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { darken, lighten } from 'polished'
import defaults from 'js/styles/theme/variables'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Auth } from 'js/auth/actions'

import styled from 'styled-components'
import avatar from '../../../../img/avatar/jenny.jpg'
import Button from 'js/components/shared/button'

const StyledHeader = styled.div`
  --bg: ${lighten(0.6, defaults.fg)};
  height: 47px;
  display: flex;
  justify-content: space-between;
  
  .logo, .ui.menu {
    background: #fff;
  }

  .ui.secondary.menu  {
    margin-top: 0;
  }

  .ui.secondary.menu .item {
    
    &.active {
      color: var(--activeLink);
      border-color: ${lighten(0.2, colors.pink)};
    }
  }
  
  .logo img {
    margin: 15px;
    max-width: 170px;
    padding-left: 50px;
  }
  
  .ui.secondary.menu a.item.create-event-btn {
    border: 1px solid var(--activeLink);
    border-radius: 5px;
    background: var(--activeLink);
    color: var(--bg);
    letter-spacing: 1.2px;
    padding: 8px 15px 6px;
    margin: 5px;
  }
  
  button {
    margin: -.5em 0;
    padding: 0.7rem 1rem;
  }

  .input input {
    border-radius: 50px;
  }

  div.item.avatar {
    height  100%;
    padding-bottom: 0px !important;
    padding-top: 0px !important;
    padding-left: 10px !important;
    margin-right: 16px !important;

    img {
      border-radius: 50px;
    }  
  }

  .ui.menu .right.menu .dropdown:last-child .menu {
    right: -22px;
    box-shadow: 0 0 32px -5px rgba(0,0,0,0.1);
  }

  div.ui.pointing.dropdown.link.item {
    padding-left: 0;
  }
`

class Header extends Component {
  state = { activeItem: 'UPCOMING' }

  handleItemClick = (e, { name }) => {
    // this.props.history.push(`/${name.replace(' ', '_').toLowerCase()}`)
    this.setState({ activeItem: name })
  }

  handleLogout = (e) => {
    this.props.logout()
      .then(res => window.location.replace('/login'))
  }

  render() {
    const menu = ['UPCOMING', 'COMMUNITIES', 'PAST EVENTS']
    const { activeItem } = this.state
    return (
      <StyledHeader className="header">
        <div className="logo">
          <a href="/">
            <img src={logo} className="img-logo" />
          </a>
        </div>
        <Menu pointing secondary>
          {menu.map(item =>
            <Menu.Item key={item} name={item}
                       active ={activeItem === item}
                       onClick={this.handleItemClick} />
          )}
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>

            <Menu.Item className="avatar">
              <img src={avatar} />
              <Dropdown pointing className='link item'>
                <Dropdown.Menu>
                  <Dropdown.Item>REMINDERS <span> (0)</span></Dropdown.Item>
                  <Dropdown.Item>FOLLOWING <span> (16)</span></Dropdown.Item>
                  <Dropdown.Item>LIKED <span> (0)</span></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>ACCOUNT</Dropdown.Item>
                  <Dropdown.Item>LOGOUT</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </StyledHeader>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    logout: Auth.logout
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))