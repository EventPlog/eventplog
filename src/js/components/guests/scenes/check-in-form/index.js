import CheckInForm from './CheckInForm'
import GuestContainer from '../../GuestContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(GuestContainer, CheckInForm)