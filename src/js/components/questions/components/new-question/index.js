import NewQuestion from './NewQuestion'
import QuestionContainer from '../../QuestionContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(QuestionContainer, NewQuestion)