import User from './User'
import UserContainer from './UserContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(UserContainer, User)