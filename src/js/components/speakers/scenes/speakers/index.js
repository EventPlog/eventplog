import Speakers from './Speakers'
import SpeakersContainer from '../../SpeakersContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(SpeakersContainer, Speakers)