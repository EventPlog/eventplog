import PresentationCard from './PartnerCard'
import PresentationContainer from '../../PartnerContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(PresentationContainer, PresentationCard)