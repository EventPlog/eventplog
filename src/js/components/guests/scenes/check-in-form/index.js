import CheckInForm from './CheckInForm'
import GuestContainer from '../../GuestContainter'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(GuestContainer, CheckInForm)