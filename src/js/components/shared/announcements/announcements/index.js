import Announcements from './Announcements'
import AnnouncementsContainer from './AnnouncementsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(AnnouncementsContainer, Announcements)