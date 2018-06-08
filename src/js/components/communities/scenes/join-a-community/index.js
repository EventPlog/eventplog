import React, { Component } from 'react'
import JoinACommunity  from './JoinACommunity'
import JoinACommunityContainer from './JoinACommunityContainer'

const JoinACommunityWithContainer = () => (
  <JoinACommunityContainer>
    {(props) => <JoinACommunity {...props} />}
  </JoinACommunityContainer>
)

export default JoinACommunityWithContainer
