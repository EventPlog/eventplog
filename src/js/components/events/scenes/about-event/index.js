import Event from './AboutEvent'
import EventContainer from './AboutEventContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventContainer, Event)