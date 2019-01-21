import MessengerCheckIn from './MessengerCheckIn'
import GuestContainer from '../../GuestContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(GuestContainer, MessengerCheckIn)