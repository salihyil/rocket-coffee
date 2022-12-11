import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders as expected', () => {
    const { container } = render(<Button />)
    expect(container).toMatchSnapshot()
  })
})
