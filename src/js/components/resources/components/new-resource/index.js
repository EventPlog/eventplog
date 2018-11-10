import React from 'react'
import NewResource from './NewResource'
import ResourceContainer from '../../ResourceContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

const NewResourceContainer = (props) => (
  <ResourceContainer resourceForm {...props}/>
)
export default renderComponentWithContainer(NewResourceContainer, NewResource)
