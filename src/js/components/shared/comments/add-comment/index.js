import AddComment from './AddComment'
import AddCommentContainer from '../CommentContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(AddCommentContainer, AddComment)