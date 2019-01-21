import QuestionAnswerCard from './QuestionAnswerCard'
import QuestionResponseContainer from '../../QuestionResponseContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(QuestionResponseContainer, QuestionAnswerCard)