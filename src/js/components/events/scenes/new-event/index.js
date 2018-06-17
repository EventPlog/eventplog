// external
import React, { Component } from 'react'

// local
import NewEvent from './NewEvent'
import NewEventContainer from './NewEventContainer'
import renderPropsToComponent from 'js/components/shared/render-props-to-component'

export default renderPropsToComponent(NewEventContainer, NewEvent)

