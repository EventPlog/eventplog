import Guests from './Guests'
import GuestsContainer from '../../GuestsContainter'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(GuestsContainer, Guests)