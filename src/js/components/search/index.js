import Events from './Search'
import EventsContainer from './SearchContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventsContainer, Events)