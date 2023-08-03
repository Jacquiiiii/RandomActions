import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import App from '../../App'
import Home from '../Home'
import Counter from '../Counter'

describe('Home component', () => {
  test('renders wording Click here to see a counter', () => {
    render(
      <App>
        <Home />
      </App>
    )
    const linkElement = screen.getByText(/Click here to see a counter/i)
    expect(linkElement).toBeInTheDocument()
    cleanup()
  })
  
  test('renders wording Click here to generate a meme', () => {
    render(
      <App>
        <Home />
      </App>
    )
    const linkElement = screen.getByText(/Click here to generate a meme/i)
    expect(linkElement).toBeInTheDocument()
    cleanup()
  })
  
  test('renders wording Click here to select your mood', () => {
    render(
      <App>
        <Home />
      </App>
    )
    const linkElement = screen.getByText(/Click here to select your mood/i)
    expect(linkElement).toBeInTheDocument()
    cleanup()
  })

  test("clicking on the counter button renders the counter component", () => {
    const { getByText, queryByTestId } = render(
      <App>
        <Home>
          <Counter />
        </Home>
      </App>
    )
    const counterLink = getByText("Click here to see a counter")
    fireEvent.click(counterLink)
    const counterComponent = queryByTestId("counter-component")
    expect(counterComponent).toBeInTheDocument()
    cleanup()
  })
})