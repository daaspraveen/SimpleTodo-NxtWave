import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoList: initialTodosList, todoInput: ''}

  addTodo = () => {
    const {todoInput, todoList} = this.state
    // console.log('todoList', todoList)
    const getnewId = todoList.length > 0 ? todoList[todoList.length - 1].id : 0
    // console.log(getnewId)
    const numberMatch = todoInput.match(/(\d+)$/)
    const numberOfTodos = numberMatch ? parseInt(numberMatch[0], 10) : 1 // Default to 1 if no number is found
    const onlyString = todoInput.replace(/(\d+)$/, '').trim()

    const newTodo = []
    let i = 0
    while (newTodo.length < numberOfTodos) {
      newTodo.push({
        id: getnewId + 1 + i,
        title: onlyString,
      })
      i += 1
    }
    // console.log(newTodo)
    this.setState(prev => ({
      todoList: [...prev.todoList, ...newTodo],
      todoInput: '',
    }))
  }

  deleteTodo = id => {
    const {todoList} = this.state
    this.setState({todoList: todoList.filter(eachItem => eachItem.id !== id)})
  }

  saveTodo = (id, newTodoValue) => {
    this.setState(prev => ({
      todoList: prev.todoList.map(each => {
        if (each.id === id) {
          return {...each, title: newTodoValue}
        }
        return each
      }),
    }))
  }

  checkedTodo = id => {
    // console.log('in checked func')
    this.setState(prev => ({
      todoList: prev.todoList.map(each => {
        if (each.id === id) {
          return {...each, checked: !each.checked || false}
        }
        return each
      }),
    }))
  }

  handleKeyDown = e => {
    const {todoInput} = this.state
    const {key} = e
    // console.log(key)
    if (key === 'Enter' && todoInput) {
      this.addTodo()
    }
  }

  render() {
    const {todoInput, todoList} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-box">
            <input
              type="text"
              className="todo-input"
              value={todoInput}
              onChange={e => this.setState({todoInput: e.target.value})}
              onKeyDown={this.handleKeyDown}
              placeholder="Enter Your Todo"
            />
            <button type="button" className="add-btn" onClick={this.addTodo}>
              Add
            </button>
          </div>
          <ul className="todos-box">
            {todoList.map(eachItem => (
              <TodoItem
                key={eachItem.id}
                todoDetails={eachItem}
                list={todoList}
                deleteTodo={this.deleteTodo}
                saveTodo={this.saveTodo}
                checkedTodo={this.checkedTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
