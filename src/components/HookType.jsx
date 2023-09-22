// External imports
import React from "react"
import styled from 'styled-components'

// Styles
import { font, boxShadow } from '../constants/constants'

// Styled components
const TrueHookBubble = styled.div`
  display: flex;
  align-self: flex-start;
  width: 15%;
  font: ${font};
  position: relative;
  cursor: pointer;
  z-index: 1;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #385170;
    padding: 0.25em;
    font-size: 15px;
    color: whitesmoke;
    width: 125px;
    height: 125px;
    border-radius: 50%; 
    margin: 0.25em 1em;
    text-align: center;
    box-shadow: ${boxShadow};
    font-weight: bold;
    position: absolute;
    top: -25px;
    ul {
      list-style-type: none;
      padding-left: 0;
    }
  }
`

const FalseHookBubble = styled.div`
  display: flex;
  align-self: flex-start;
  width: 15%;
  font: ${font};
  position: relative;
  cursor: pointer;
  z-index: 1;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #385170;
    padding: 0.25em;
    font-size: 15px;
    color: whitesmoke;
    width: 75px;
    height: 75px;
    border-radius: 50%; 
    margin: 0.25em 1em;
    text-align: center;
    box-shadow: ${boxShadow};
    font-weight: bold;
    position: absolute;
    top: -25px;
  }
`

const HookType = (props) => {
  return (
    <>
      {props.hookBubble &&
        <TrueHookBubble onClick={props.onClick}>
          <div>
            <ul>
              {props.hooks.map(hook => <li>{hook}</li>)}
            </ul>
          </div>
        </TrueHookBubble>
      }
      {!props.hookBubble &&
        <FalseHookBubble onClick={props.onClick}>
          <div>Hooks used</div>
        </FalseHookBubble>
      }
    </>
  )
}

export default HookType