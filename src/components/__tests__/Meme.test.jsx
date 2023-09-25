import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import ThemeProvider from '../../providers/ThemeProvider'

import Meme from '../Meme'

jest.mock('axios')

describe('Meme Component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders "Click here!" button ', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme="light">
          <Meme />
        </ThemeProvider>
      </BrowserRouter>
    )

    const clickHereButton = screen.getByText('Click here!')
    expect(clickHereButton).toBeInTheDocument()
  })

  it('renders meme when button is clicked', async () => {
    const resolvedData = {
      success: true,
      data: {
        memes: [
          {
            id: '61579',
            name: "One Does Not Simply",
            url: "https://i.imgflip.com/1bij.jpg",
            width: 568,
            height: 335,
            box_count: 2
          },
          {
            id: '101470',
            name: "Ancient Aliens",
            url: "https://i.imgflip.com/26am.jpg",
            width: 500,
            height: 437,
            box_count: 2
          }
        ]
      }
    }

    axios.get.mockResolvedValueOnce({data: resolvedData})

    render(
      <BrowserRouter>
        <ThemeProvider theme="light">
          <Meme />
        </ThemeProvider>
      </BrowserRouter >
    )

    const clickHereButton = screen.getByText('Click here!')
    fireEvent.click(clickHereButton)

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://api.imgflip.com/get_memes')

    await waitFor(() => {
      const memeImage = screen.getByAltText('meme')
      expect(memeImage).toBeInTheDocument()
    })
  })

  it('displays an error message when API call fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('API request failed'))

    render(
      <BrowserRouter>
        <ThemeProvider theme="light">
          <Meme />
        </ThemeProvider>
      </BrowserRouter>
    )

    const clickHereButton = screen.getByText('Click here!')
    fireEvent.click(clickHereButton)

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://api.imgflip.com/get_memes')

    const errorMessage = await screen.findByText('Error: API request failed')
    expect(errorMessage).toBeInTheDocument()
  })
})