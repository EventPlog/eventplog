import EventOrganizers from './EventOrganizers'
import EventOrganizersContainer from './EventOrganizersContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventOrganizersContainer, EventOrganizers)