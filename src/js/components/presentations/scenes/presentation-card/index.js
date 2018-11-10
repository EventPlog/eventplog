import PresentationCard from './PresentationCard'
import PresentationContainer from '../../PresentationContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(PresentationContainer, PresentationCard)