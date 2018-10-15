import MyEvents from './MyEvents'
import EventContainer from './MyEventsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventContainer, MyEvents)