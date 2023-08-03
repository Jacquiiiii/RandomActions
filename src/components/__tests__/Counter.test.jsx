import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Counter from '../Counter'

// Defines the setup function, which will render the component with a router
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, { wrapper: BrowserRouter })
}

describe('Counter component', () => {
  test('clicking on the increment button increases the counter', () => {
    const { getByText } = renderWithRouter(<Counter />) // Renders component
    const incrementButton = getByText('+') // Looks for increment button
    const counter = getByText('0') // Looks for starting count
    fireEvent.click(incrementButton) // Clicks on increment button
    expect(counter).toHaveTextContent('1') // Validates that 0 changes to 1 on click
  })
})