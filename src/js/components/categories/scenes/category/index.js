import Community from './Category'
import CommunityContainer from './CategoryContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(CommunityContainer, Community)