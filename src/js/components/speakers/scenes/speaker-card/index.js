import SpeakerCard from './SpeakerCard'
import SpeakerContainer from '../../SpeakerContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(SpeakerContainer, SpeakerCard)