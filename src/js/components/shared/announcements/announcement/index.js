import Announcement from './Announcement'
import AnnouncementContainer from './AnnouncementContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(AnnouncementContainer, Announcement)