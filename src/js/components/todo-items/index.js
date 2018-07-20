import TodoItems from './components/todo-items'
import TodoItemsContainer from './TodoItemsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(TodoItemsContainer, TodoItems)