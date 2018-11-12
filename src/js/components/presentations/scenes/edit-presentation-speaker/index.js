import EditPresentationForm from './EditPresentationForm'
import PresentationContainer from 'js/components/user/scenes/user/UserContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(PresentationContainer, EditPresentationForm)