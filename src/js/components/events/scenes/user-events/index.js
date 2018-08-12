import UserEvents from './UserEvents'
import UserEventsContainer from './UserEventsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(UserEventsContainer, UserEvents)