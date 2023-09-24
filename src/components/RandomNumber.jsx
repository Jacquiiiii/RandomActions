import React, { useState, useMemo } from "react"
import styled from 'styled-components'
import { boxShadow, font } from '../constants/constants'

import Nav from "./Nav"

const RandomNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GenerateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5em;
  button {
    font-size: 30px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    font-family: ${font};
    color: whitesmoke;
    border-radius: 0.25em;
    padding: 1em 2em;
    background: #385170;
    box-shadow: ${boxShadow};
  }
`

const ResultsContainer = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ececec;
  border-radius: 0.25em;
  color: black;
  margin-top: 2em;
  box-shadow: ${boxShadow};
  button {
    font-weight: bold;
    border: none;
    cursor: pointer;
    font-family: ${font};
    color: whitesmoke;
    border-radius: 0.25em;
    padding: 1em 2em;
    background: #385170;
    box-shadow: ${boxShadow};
    font-size: 16px;
    margin: 2em;
  }
`

const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0)

  const numberGenerator = () => {
    const number = Math.floor(Math.random() * 100) + 1
    setRandomNumber(number)
  }

  const message = useMemo(() => {
    return randomNumber % 2 === 0 ? "Even number generated!" : "Odd number generated!"
  }, [randomNumber])

  return (
    <RandomNumberContainer>
      <Nav />
      <GenerateContainer>
        <button onClick={numberGenerator}>Click here!</button>
      </GenerateContainer>
      {randomNumber > 0 &&
        <>
          <ResultsContainer>
            <Result>
              <h2>{randomNumber}</h2>
              <span>{message}</span>
            </Result>
            <button onClick={() => setRandomNumber(0)}>Clear</button>
          </ResultsContainer>
        </>
      }
    </RandomNumberContainer>
  )
}

export default RandomNumber

