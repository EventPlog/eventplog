import GuestRow from './GuestRow'
import GuestContainer from 'js/components/guests/GuestContainter'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(GuestContainer, GuestRow)