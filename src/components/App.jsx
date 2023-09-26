import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeContext } from '../providers/ThemeProvider'
import './styles/styles.css'

import Home from './Home'
import Counter from './Counter'
import Meme from './Meme'
import Todo from './Todo'
import RandomNumber from './RandomNumber'
import ScrollTest from './ScrollTest'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App-${theme}`} data-testid="app-container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Counter" element={<Counter />} />
          <Route exact path="/Meme" element={<Meme />} />
          <Route exact path="/Todo" element={<Todo />} />
          <Route exact path="/RandomNumber" element={<RandomNumber />} />
          <Route exact path="/ScrollTest" element={<ScrollTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
