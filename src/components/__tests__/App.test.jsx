import React from 'react'
import { render } from '@testing-library/react'
import ThemeProvider from '../../providers/ThemeProvider'

import App from '../App'

describe('App Component', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme="light">
        <App />
      </ThemeProvider>
    )
  })
})
