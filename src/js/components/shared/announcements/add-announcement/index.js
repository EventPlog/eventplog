import AddComment from './AddAnnouncement'
import AddCommentContainer from '../announcement/AnnouncementContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(AddCommentContainer, AddComment)