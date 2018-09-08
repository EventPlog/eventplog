import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import Member from './Member'

const StyledMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; 
  
  ${
    media.phone`
      flex-direction: column;
    `
  }
  
  .member {
    margin: 2rem;
  }
`

const Members = ({ className, children }) => (
  <StyledMembers className={className}>
    {children}
  </StyledMembers>
)

Members.Member = Member;

export default Members