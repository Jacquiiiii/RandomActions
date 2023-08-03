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
  img {
    margin-top: 1em;
    border-radius: 50%;
    height: 80vh;
    width: auto;
  }
`

const Home = () => {
  return (
    <HomeContainer>
      <Nav></Nav>
      <img src="https://www.sciencenews.org/wp-content/uploads/2021/02/022421_mt_number-generator_feat-1030x580.jpg" alt="dice"/>
    </HomeContainer>
  )
}

export default Home