import NewTodoItem from './NewTodoItem'
import TodoItemContainer from '../../TodoItemContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(TodoItemContainer, NewTodoItem)
