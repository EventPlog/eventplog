import Event from './Event'
import EventContainer from './EventContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventContainer, Event)