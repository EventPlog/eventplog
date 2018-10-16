import MyCommunities from './MyCommunities'
import EventContainer from './MyCommunitiesContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventContainer, MyCommunities)