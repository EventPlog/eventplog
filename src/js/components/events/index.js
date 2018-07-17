import Events from './Events'
import EventsContainer from './EventsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventsContainer, Events)