import React, { useState, createContext } from "react"

export const ThemeContext = createContext()

const ThemeProvider = props => {
  const [theme, setTheme] = useState("dark")

  const value = { theme, setTheme }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
