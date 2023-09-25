import React, { useState } from "react"
import axios from 'axios'
import styled from 'styled-components'
import { boxShadow, font } from '../constants/constants'

import MemeImageContainer from './MemeImageContainer'
import Nav from "./Nav"

const MemeContainer = styled.div`
  padding: 0.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5em;
`

const MemeButton = styled.div`
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
`

const Meme = () => {
  const [meme, setMeme] = useState("")
  const [apiError, setApiError] = useState(false)

  const generateMeme = () => {
    axios.get('https://api.imgflip.com/get_memes')
      .then(response => {
        const memeList = response.data.data.memes
        const randomNumber = Math.floor(Math.random() * 101)
        setMeme(memeList[randomNumber].url)
        console.log(response.data)
      })
      .catch(error => {
        console.log('error!', error)
        setApiError(true)
      })
  }

  return (
    <>
      <Nav />
      <MemeContainer>
        <MemeButton onClick={ generateMeme }>Click here!</MemeButton>
        { (meme && meme !== '') && <MemeImageContainer memeImg={meme}/> }
        { apiError && <div>Error: API request failed</div> }
      </MemeContainer>
    </>
  )
}

export default Meme
