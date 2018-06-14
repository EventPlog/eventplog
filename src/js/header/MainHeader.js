import React, { Component }  from 'react'
import logo from '../../img/logo.svg';
import { Menu, Input, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'
import defaults from '../styles/theme/variables'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Auth } from '../auth/actions'

import styled from 'styled-components'
import Button from '../components/shared/button'

const StyledHeader = styled.div`
  --bg: ${lighten(0.6, defaults.fg)};
  background: var(--bg);
  
  .logo, .ui.menu {
    background: #fff;
  }
  
  .ui.secondary.menu .item {
    
    &.active {
      color: var(--activeLink);
      border-color: var(--activeLink);
    }
  }
  
  .logo img {
    height: 50px;
    margin: 20px;
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
`

class Header extends Component {
  state = { activeItem: 'Events' }

  handleItemClick = (e, { name }) => {
    this.props.history.push(`/${name.replace(' ', '_').toLowerCase()}`)
    this.setState({ activeItem: name })
  }

  handleLogout = (e) => {
    this.props.logout()
      .then(res => window.location.replace('/login'))
  }

  render() {
    const menu = ['Events', 'Communities', 'Explore']
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

            <Menu.Item link>
              <Button onClick={() => this.props.history.push('/events/new')}>
                <Icon name="plus"/>
                Create Event
              </Button>
            </Menu.Item>

            <Menu.Item name='logout'
                       active={activeItem === 'logout'}
                       onClick={this.handleLogout} />
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