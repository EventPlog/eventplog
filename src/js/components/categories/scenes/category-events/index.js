import CategoryEvents from 'js/components/events/scenes/user-events/UserEvents'
import CategoryEventsContainer from './CategoryEventsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(CategoryEventsContainer, CategoryEvents)