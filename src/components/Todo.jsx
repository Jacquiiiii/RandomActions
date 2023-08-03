// External imports
import React, { useState, useReducer, useCallback } from "react"
import styled from 'styled-components'

// Components
import Nav from "./Nav"
import HookType from "./HookType"

// Hooks
import useHookBubble from "../hooks/useHookBubble"

// Styles
import { boxShadow, font } from '../constants/constants'

// Styled components
const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;
`

const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5em 0 1em 0;
  input {
    font-size: 20px;
    width: 25vw;
    outline: none;
    border-radius: 0.25em;
    border: none;
    padding: 1em;
    box-shadow: ${boxShadow};
    margin-right: 1em;
    background-color: #dcdcdc;
  }
  button {
    width: 150px;
  }
`

const TodoItem = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  span {
    margin-right: 1em;
    padding: 0.75em;
    background-color: #dcdcdc;
    width: 40vw;
    border-radius: 0.25em;
    box-shadow: ${boxShadow};
    color: black;
  }
  button {
    border-radius: 50%;
    background: radial-gradient(circle at 50.4% 50.5%, rgb(251, 32, 86) 0%, rgb(135, 2, 35) 90%);
  }
`

const Button = styled.button`
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-family: ${font};
  color: whitesmoke;
  border-radius: 0.25em;
  padding: 1em 2em;
  background: linear-gradient(to top, #09203f 0%, #537895 100%);
  box-shadow: ${boxShadow};
  font-size: 16px;
`

let newId = 0
const newTodo = (task) => {
  return { id: newId += 1, task: task }
}

const reducer = (todos, action) => {
  switch (action.type) {
    case "add":
      return [...todos, newTodo(action.payload.task)]
    case "delete":
      return todos.filter((todo) => todo.id !== action.payload.id)
    default:
      return todos
  }
}

const Todo = () => {
  const [task, setTask] = useState("")
  const [todos, dispatch] = useReducer(reducer, [])
  const { hookBubble, handleClick } = useHookBubble()

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (task !== "") {
      dispatch({ type: "add", payload: { task: task } })
      setTask("")
    }
  }, [task, dispatch])

  return (
    <TodoContainer>
      <Nav />
      <HookType 
        hooks={["useState", "useContext", "useReducer", "useCallback", "customHook"]}
        onClick={handleClick} 
        hookBubble={hookBubble}
      />
      <SubmitContainer>
        <input
          type='text'
          value={task}
          placeholder="Please enter a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </SubmitContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          <span>{todo.task}</span>
          <Button onClick={() => dispatch({ type: "delete", payload: { id: todo.id } })}>Delete</Button>
        </TodoItem>
      ))}
    </TodoContainer>
  )
}

export default Todo
