// External imports
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

// Styles
import { font } from '../constants/constants'

// Context
import { ThemeContext } from '../providers/ThemeProvider'

// Styled components
const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #363434;
  width: 100%;
  height: 30%;
  padding: 1em 0;
  button {
    border: none;
    margin: 1em;
    cursor: pointer;
    background: none;
    font-family: ${font};
    color: whitesmoke;
    font-weight: bold;
    font-size: 20px;
    &:hover {
      text-decoration: underline;
    };
  }
`

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <NavBar>
      <button><Link className="link" to="/" >Home</Link></button>
      <button onClick={handleThemeChange}>Theme</button>
      <button><Link className="link" to="/Counter" >Counter</Link></button>
      <button><Link className="link" to="/Meme" >Meme Generator</Link></button>
      <button><Link className="link" to="/Todo" >To-do List</Link></button>
      <button><Link className="link" to="/RandomNumber" >Random Number Generator</Link></button>
    </NavBar>
  )
}

export default Nav