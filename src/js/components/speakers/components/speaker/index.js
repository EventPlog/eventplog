import Resource from './Speaker'
import ResourceContainer from '../../SpeakerContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(ResourceContainer, Resource)