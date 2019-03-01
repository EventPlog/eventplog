import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'

//========== INTERNAL ============
import colors from '../../../styles/theme/colors'

const StyledIcons = styled.div`
  position: absolute;
  top: ${props => props.bigCard ? '20px' : "calc(200px - 1.5rem)"};
  right: ${props => props.bigCard ? "12px" : "0px"};

  display: flex;
  justify-content: flex-end;
  
  .bookmark {
    height: ${props => props.bigCard ? '50px' : ''};
    width: ${props => props.bigCard ? '50px' : ''};
    padding: ${props => props.bigCard ? '1.25rem' : '0.7rem'};
    background: var(--activeLink);
    color: ${colors.yellow};
    border-radius: 50%;
    margin: 0 0.5rem;
    box-shadow: 0px 0px 8px ${lighten(0.3, colors.darkGray)};
    
    &:hover {
      background: white;
      color: var(--activeLink);
    }
    
    &:first-child {
      background: white;
      color: var(--activeLink);
    
      &:hover {
        color: ${colors.yellow};
        background: var(--activeLink);
      }
    }
`

const Icons = (props) => (
  <StyledIcons bigCard={props.bigCard}>
    <Link className="bookmark" to="#">
      <Icon name="share square" />
    </Link>

    <Link className="bookmark inverted" to="#">
      <Icon name="heart" />
    </Link>
  </StyledIcons>
)

export default Icons;
