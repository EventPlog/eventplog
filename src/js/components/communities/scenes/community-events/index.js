import CommunityEvents from 'js/components/events/scenes/user-events/UserEvents'
import CommunityEventsContainer from './CommunityEventsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(CommunityEventsContainer, CommunityEvents)