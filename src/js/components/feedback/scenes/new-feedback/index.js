// external
import React, { Component } from 'react'

// local
import UpdateCommunity  from './UpdateCommunity'
import CommunityContainer from '../community/CommunityContainer'
import renderPropsToComponent from 'js/components/shared/render-props-to-component'

export default renderPropsToComponent(CommunityContainer, UpdateCommunity)

