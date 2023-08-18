// External imports
import React from "react"
import styled from 'styled-components'

// Components
import Nav from "./Nav"

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 5em;
    margin-top: 1em;
    color: whitesmoke;
  }
`

const Home = () => {
  return (
    <HomeContainer>
      <Nav />
      <h2>Random Actions</h2>
    </HomeContainer>
  )
}

export default Home