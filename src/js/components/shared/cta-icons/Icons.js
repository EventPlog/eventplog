import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'

//========== INTERNAL ============
import colors from 'js/styles/theme/colors'
import RegistrationButton from 'js/components/shared/event-registration-button'
import {
  genEventLink,
} from 'js/utils'

const StyledIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .bookmark {
    padding: 0.7rem;
    color: var(--activeLink);
    background: ${colors.yellow};
    border-radius: 10rem;
    margin: 0 0.5rem;
    box-shadow: 0px 0px 8px ${lighten(0.3, colors.darkGray)};
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
      background: white;
      color: var(--activeLink);
    }
    
    &:first-child {
      background: white;
      color: var(--activeLink);
      border: none;
      
      &:hover {
        color: ${colors.yellow};
        background: var(--activeLink);
      }
    }
`

export const generateTopBtn = (event) => (
  event.is_past
    ? event.has_resources
      ? <Link className="bookmark" to={`${genEventLink(event)}/resources`}>
          Slides/Resources
        </Link>
      : ''
    : [
        <RegistrationButton event={event} className="bookmark" />,
        event.needs_sponsorship
          ? <Link className="bookmark inverted" to={`${genEventLink(event)}/sponsors/new`}>
              <Icon name="heart" />
              Sponsors Deck
            </Link>
          : ''
      ]
)

const Icons = ({bigCard, event = {}}) => (
  <StyledIcons bigCard={bigCard}>
    {generateTopBtn(event)}
  </StyledIcons>
)

export default Icons;
