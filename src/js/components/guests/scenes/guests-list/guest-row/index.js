import GuestRow from './GuestRow'
import CheckInContainer from 'js/components/guests/CheckInContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(CheckInContainer, GuestRow)