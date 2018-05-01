import React from 'react'
import logo from '../../../../img/tmn_bar_code.png';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLeadsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  
  .logo {
    margin: 10px 20px;
    img {
      width: 50px;
    }
  }
  
  nav {
    color: var(--activeLink);
    display: flex;
    align-items: center;
    margin: 0 50px;
  }
`

const LeadsHeader = ({ menu }) => (
  <StyledLeadsHeader>
    <div className="logo">
      <Link to="/" replace>
        <img src={logo} />
      </Link>
    </div>
    <nav>
      {menu && menu.map(item =>
        <Link to={item.url || '/'}>{item.text}</Link>)
      }
    </nav>
  </StyledLeadsHeader>
)

export default LeadsHeader;
