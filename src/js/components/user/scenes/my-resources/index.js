import MyCommunities from './MyResources'
import EventContainer from './MyResourcesContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventContainer, MyCommunities)