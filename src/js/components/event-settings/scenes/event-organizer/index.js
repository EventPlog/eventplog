import EventOrganizer from './EventOrganizer'
import EventOrganizerContainer from './EventOrganizerContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventOrganizerContainer, EventOrganizer)