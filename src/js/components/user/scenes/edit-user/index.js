import EditUserForm from './EditUserForm'
import UserContainer from '../user/UserContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(UserContainer, EditUserForm)