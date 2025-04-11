// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, saveTodo, checkedTodo} = props
  const {id, title, checked = false} = todoDetails
  const [isEdit, setIsEdit] = useState(false)
  const [inputEdit, setInputEdit] = useState(title)

  const doChecked = () => {
    checkedTodo(id)
  }

  const doDelete = () => {
    deleteTodo(id)
  }

  const doRunEditSave = () => {
    if (isEdit) {
      saveTodo(id, inputEdit)
    }
    setIsEdit(prev => !prev)
  }

  return (
    <li className="todo-list">
      {!isEdit && (
        <input
          type="checkbox"
          checked={checked}
          onChange={doChecked}
          className="checkbox"
        />
      )}
      {isEdit ? (
        <input
          type="text"
          className="input-edit"
          value={inputEdit}
          onChange={e => setInputEdit(e.target.value)}
        />
      ) : (
        <p
          className="todo-para"
          style={{textDecoration: checked ? 'line-through' : 'none'}}
        >
          {title}
        </p>
      )}
      <div className="btns-box">
        <button className="saveEdit-btn" type="button" onClick={doRunEditSave}>
          {isEdit ? 'Save' : 'Edit'}
        </button>
        <button className="todo-delete-btn" type="button" onClick={doDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
