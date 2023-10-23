import styled from 'styled-components'
import { boxShadow, homeImages } from '../constants/constants'

import Nav from "./Nav"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h2 {
    font-size: 7em;
    margin-top: 1em;
    color: whitesmoke;
  }
  img {
    width: 150px;
    height: auto;
    border-radius: 0.25em;
    box-shadow: ${boxShadow}
  }
  span {
    margin-bottom: 1em;
  }
`

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90%;
  gap: 50px;
  margin: 3em;
`

const Home = () => {
  return (
    <HomeContainer>
      <Nav />
      <ImagesContainer>
        {homeImages.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt="random"
        />
      ))}
      </ImagesContainer>
      <span>This app was created for development practice</span>
    </HomeContainer>
  )
}

export default Home