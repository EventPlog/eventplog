import Comment from './Comment'
import CommentContainer from '../CommentContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(CommentContainer, Comment)