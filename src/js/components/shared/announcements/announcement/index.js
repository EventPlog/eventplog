import Comment from './Announcement'
import CommentContainer from '../AnnouncementContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(CommentContainer, Comment)