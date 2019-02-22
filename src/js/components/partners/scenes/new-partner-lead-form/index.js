import NewPartnerForm from './NewPartnerLeadForm'
import PartnerContainer from '../../PartnerLeadContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(PartnerContainer, NewPartnerForm)
