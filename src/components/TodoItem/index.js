// Write your code here
import './index.css'

const TodoItem = props => {
  const {id, title, deleteTodo} = props

  const doDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-list">
      <p className="todo-para">{title}</p>
      <button className="todo-delete-btn" type="button" onClick={doDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
