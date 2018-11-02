import EditSpeakerForm from './EditSpeakerForm'
import SpeakerContainer from 'js/components/user/scenes/user/UserContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(SpeakerContainer, EditSpeakerForm)