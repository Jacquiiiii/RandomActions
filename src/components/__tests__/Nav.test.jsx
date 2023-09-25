import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import ThemeProvider from '../../providers/ThemeProvider'

import Nav from '../Nav'
import App from '../App'

describe('Nav Component', () => {
  it('renders the Nav links', () => {
    render(
      <ThemeProvider theme="dark">
        <App>
          <Nav />
        </App>
      </ThemeProvider>
    )

    const counter = screen.getByText('Counter')
    expect(counter).toBeInTheDocument()

    const meme = screen.getByText('Meme Generator')
    expect(meme).toBeInTheDocument()

    const toDo = screen.getByText('To-do List')
    expect(toDo).toBeInTheDocument()

    const randomNumber = screen.getByText('Random Number Generator')
    expect(randomNumber).toBeInTheDocument()
  })

  it('routes to Counter page when Counter button is clicked', () => {
    render(
      <ThemeProvider theme="dark">
        <App>
          <Nav />
        </App>
      </ThemeProvider>
    )

    const counter = screen.getByText('Counter')
    fireEvent.click(counter)
    expect(window.location.pathname).toBe('/Counter')
  })

  it('routes to MemeGenerator page when Meme Generator button is clicked', () => {
    render(
      <ThemeProvider theme="dark">
        <App>
          <Nav />
        </App>
      </ThemeProvider>
    )

    const meme = screen.getByText('Meme Generator')
    fireEvent.click(meme)
    expect(window.location.pathname).toBe('/Meme')
  })

  it('routes to To-do List page when To-do List button is clicked', () => {
    render(
      <ThemeProvider theme="dark">
        <App>
          <Nav />
        </App>
      </ThemeProvider>
    )

    const todo = screen.getByText('To-do List')
    fireEvent.click(todo)
    expect(window.location.pathname).toBe('/Todo')
  })

  it('routes to Random Number Generator page when Random Number Generator button is clicked', () => {
    render(
      <ThemeProvider theme="dark">
        <App>
          <Nav />
        </App>
      </ThemeProvider>
    )

    const randomNumber = screen.getByText('Random Number Generator')
    fireEvent.click(randomNumber)
    expect(window.location.pathname).toBe('/RandomNumber')
  })

  it('renders Random Actions text', () => {
    render(
      <ThemeProvider theme="dark">
        <App>
          <Nav />
        </App>
      </ThemeProvider>
    )

    const appName = screen.getByText('Random Actions')
    expect(appName).toBeInTheDocument()
  })

  it('renders lightbulb button and changes theme on click', () => {
    render(
      <ThemeProvider theme="dark">
        <App>
          <Nav />
        </App>
      </ThemeProvider>
    )

    const lightbulbButton = screen.getByTestId('lightbulb')
    expect(lightbulbButton).toBeInTheDocument()

    const appElement = screen.getByTestId('app-container')

    fireEvent.click(lightbulbButton)
    expect(appElement).toHaveClass('App-light')

    fireEvent.click(lightbulbButton)
    expect(appElement).toHaveClass('App-dark')
  })
})
