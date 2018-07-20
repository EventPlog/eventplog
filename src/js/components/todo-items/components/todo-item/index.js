import TodoItem from './TodoItem'
import TodoItemContainer from '../../TodoItemContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(TodoItemContainer, TodoItem)
