import React from 'react'
import { render, screen } from '@testing-library/react'
import ThemeProvider from '../../providers/ThemeProvider'

import App from '../App'
import Home from '../Home'

describe('Home Component', () => {
  it('renders images', () => {
    render(
      <ThemeProvider theme="light">
        <App>
          <Home />
        </App>
      </ThemeProvider>
    )

    const images = screen.getAllByAltText('random')
    expect(images.length).toBeGreaterThan(0)
  })
})