import Event from './Events'
import EventContainer from './EventsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventContainer, Event)