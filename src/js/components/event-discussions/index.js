import Discussion from './EventDiscussion'
import DiscussionContainer from './EventDiscussionContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(DiscussionContainer, Discussion)