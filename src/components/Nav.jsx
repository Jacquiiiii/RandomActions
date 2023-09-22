import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { font } from '../constants/constants'
import { ThemeContext } from '../providers/ThemeProvider'

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  background: #142d4c;
  width: 100%;
  padding: 1em 0;
  z-index: 1;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 50px;
    font-weight: bold;
    color: whitesmoke;
  }
  button {
    border: none;
    margin: 0 0.5em 0 0.5em;
    cursor: pointer;
    background: none;
    font-size: 30px;
  }
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: none;
    margin: 0.5em;
    cursor: pointer;
    background: none;
    font-family: ${font};
    color: whitesmoke;
    font-weight: bold;
    font-size: 16px;
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
      <Heading>
        <button onClick={handleThemeChange}>💡</button>
        <Link className="link" to="/" ><span>Random Actions</span></Link>
      </Heading>
      <LinkContainer>
        <button><Link className="link" to="/Counter" >Counter</Link></button>
        <button><Link className="link" to="/Meme" >Meme Generator</Link></button>
        <button><Link className="link" to="/Todo" >To-do List</Link></button>
        <button><Link className="link" to="/RandomNumber" >Random Number Generator</Link></button>
      </LinkContainer>
    </NavBar>
  )
}

export default Nav