import Comments from './Comments'
import CommentsContainer from './CommentsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(CommentsContainer, Comments)