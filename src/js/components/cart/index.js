import EventResources from './components/MainContent'
import EventResourcesContainer from './CartContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventResourcesContainer, EventResources)