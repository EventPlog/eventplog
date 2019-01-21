import ShowQuestions from './ShowQuestions'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'
import GuestContainer from 'js/components/guests/GuestContainer'

export default renderComponentWithContainer(GuestContainer, ShowQuestions)