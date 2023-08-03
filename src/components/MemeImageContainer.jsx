// External imports
import React from "react"
import styled from 'styled-components'

// Styles
import { boxShadow, font } from '../constants/constants'

// Styled components
const MemeContainer = styled.div`
  margin: 1.5em;
  ${'' /* font-size: 1em; */}
  border-radius: 0.25em;
  border: none;
  cursor: pointer;
  font-family: ${font};
  img {
    height: 400px;
    width: auto;
    box-shadow: ${boxShadow};
    border-radius: 0.25em;
  }
`

const MemeImageContainer = (props) => {
  return (
    <>
      <MemeContainer>
        <img alt="meme" src={ props.memeImg }/>
      </MemeContainer>
    </>
  )
}

export default MemeImageContainer
