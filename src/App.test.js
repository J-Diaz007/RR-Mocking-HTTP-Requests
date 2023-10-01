import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { renderIntoDocument } from 'react-dom/test-utils'

beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
  })

describe('test for the GitHub API request', () => {
    test('header text shows GitHub login name', async () => {
        fetch.mockResponseOnce(JSON.stringify({login: 'J-Diaz007'}))
        render(<App />)
        const headerEl = await waitFor(() => screen.getByRole('heading', {level: 2}))
        expect(headerEl.textContent).toBe('J-Diaz007')
    })
    test('Button links to correct GitHub profile', async () => {
        fetch.mockResponseOnce(JSON.stringify({login: 'J-Diaz007'}))
        render(<App />)
        const linkEl = await waitFor(() => screen.getByRole('link'))
        expect(linkEl.href).toBe('J-Diaz007')
    })
})
