import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByText(
      'Welcome to Search Products App'
    )

    expect(heading).toBeInTheDocument()
  })
})