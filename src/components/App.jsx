// External imports
import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Context
import { ThemeContext } from '../providers/ThemeProvider'

// Styles
import './styles/styles.css'

// Components
import Home from './Home'
import Counter from './Counter'
import Meme from './Meme'
import Todo from './Todo'
import RandomNumber from './RandomNumber'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App-${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Counter" element={<Counter />} />
          <Route exact path="/Meme" element={<Meme />} />
          <Route exact path="/Todo" element={<Todo />} />
          <Route exact path="/RandomNumber" element={<RandomNumber />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
