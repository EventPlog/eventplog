import SponsorOfferItemCard from './SponsorCard'
import SponsorOfferItemContainer from '../../SponsorshipOfferItemContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(SponsorOfferItemContainer, SponsorOfferItemCard)