// External imports
import React, { useState } from "react"
import styled from 'styled-components'

// Components
import Nav from "./Nav"
import HookType from "./HookType"

// Hooks
import useHookBubble from "../hooks/useHookBubble"

// Styles
import { boxShadow, font } from '../constants/constants'

// Styled components
const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CounterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 4em;
  background: #385170;
  border-radius: 0.25em;
  box-shadow: ${boxShadow};
  width: 50vw;
  padding: 0 1em;
  font-family: ${font};
  p {
    color: whitesmoke;
  }
  button {
    border: none;
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
    background-color: transparent;
    color: white;
  };
  button:hover {
    text-shadow: 1px 1px 1px #000;
  };
  p {
    font-size: 50px;
    font-weight: bold;
  }
`

const Counter = () => {
  const [count, setCount] = useState(0)
  const { hookBubble, handleClick } = useHookBubble()

  const handleIncrease = () => {
    setCount(count => count + 1)
  }

  const handleDecrease = () => {
    setCount(count => count - 1)
  }

  return (
    <CounterContainer>
      <Nav />
      <HookType 
        hooks={["useState", "useContext", "customHook"]}
        onClick={handleClick} 
        hookBubble={hookBubble}
      />
      <CounterButtonContainer data-testid="counter-component">
        <button onClick={handleDecrease}>–</button>
        <p>{count}</p>
        <button onClick={handleIncrease}>+</button>
      </CounterButtonContainer>
    </CounterContainer>
  )
}

export default Counter
