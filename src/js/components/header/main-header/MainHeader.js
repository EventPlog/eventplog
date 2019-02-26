import React, { Component }  from 'react'
import { Link, matchPath } from 'react-router-dom'
import { darken, lighten } from 'polished'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Menu, Input, Icon, Dropdown } from 'semantic-ui-react'


//============ INTERNAL ============
import defaults from 'js/styles/theme/variables'
import { Auth } from 'js/auth/actions'
import logo from 'img/eventplog-logo-v23-small.png'
import colors from '../../../styles/theme/colors'
import styled from 'styled-components'
import UserAvatar from 'js/components/header/logged-in-header/UserAvatar'
import { genUserProfileLink } from 'js/utils'
import Button from 'js/components/shared/button'


const StyledHeader = styled.div`
  --bg: ${lighten(0.6, defaults.fg)};
  height: 47px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  border-bottom: 2px solid rgba(34,36,38,.15);
  background: white;
  
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
  
  .logo {
    display: flex;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    img {
      margin: 15px 15px 7px 0;
      max-width: 120px;
    }
    
    .menu-btn {
      color: var(--activeLink);
      cursor: pointer;
      font-size: 1.3rem;
      padding: 1rem;
    }
  }
  
  .ui.secondary.pointing.menu {
    border-bottom: 0;
    
    .item {
      align-self: center;
    }
    
    .item.sidebar-btn {
      padding: 0;
      padding-right: 1rem;
    }
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
    padding: 0;
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
    const menu = [{title: 'Join us on Spectrum', link: 'https://spectrum.chat/ploggers'}]
    const { activeItem } = this.state
    const { currentUser: user = {}, toggleSidebar } = this.props

    const matchLogin = matchPath(location.pathname, '/login')
    return (
      <StyledHeader className="header">
        <div className="logo">
          <div className="menu-btn"
               onClick={toggleSidebar}>
            <i aria-hidden="true" class="content icon">
            </i>
          </div>
          <Link to="/">
            <img src={logo} className="img-logo" />
          </Link>
        </div>

        <Menu pointing secondary>
          {menu.map(item =>
            <Menu.Item key={item.title}
                       className="hidden-xs hidden-md"
                       active ={activeItem === item}
                       onClick={this.handleItemClick}>
              <Link target="_blank" to={item.link}>
                {item.title}
              </Link>
            </Menu.Item>
          )}


          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search'
                     placeholder='Search...'
                     className="hidden-xs hidden-md" />
              <Link to="/search" className="hidden-lg">
                <Icon name="search" />
              </Link>
            </Menu.Item>

            {!user.id &&
              <Menu.Item className="sidebar-btn login">
                {matchLogin && <Button.Link to="/signup">Sign Up</Button.Link>}
                {!matchLogin && <Button.Link to="/login">Login</Button.Link>}
              </Menu.Item>
            }

            {user.id &&
              <Menu.Item className="avatar">
              <Dropdown text={<UserAvatar user={user} />}
                        pointing
                        className='link item'>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to={genUserProfileLink(user)}>
                      <Icon name="user circle"/> My Profile
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link to={`${genUserProfileLink(user)}/settings`}>
                      <Icon name="settings"/> Settings
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Link to="/logout">
                      <Icon name="lock open"/> Log out
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            }
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