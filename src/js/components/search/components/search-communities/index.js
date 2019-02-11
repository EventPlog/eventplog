import SearchCommunities from './SearchCommunities'
import SearchCommunitiesContainer from './SearchCommunitiesContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(SearchCommunitiesContainer, SearchCommunities)