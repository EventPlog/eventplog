import SetupQuestion from './SetupQuestion'
import QuestionsContainer from '../../QuestionsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(QuestionsContainer, SetupQuestion)