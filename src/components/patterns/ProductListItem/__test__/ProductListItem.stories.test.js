import React from 'react'
import { OnSale, SoldOut, Standard } from '../ProductListItem.stories'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

it('shows on sale label when isOnSale', () => {
  const { getByText } = render(<OnSale isOnSale />)
  expect(getByText(`(On Sale)`)).toBeInTheDocument()
})

it('disables the button when disabled', () => {
  const { getByText } = render(<SoldOut isSoldOut />)
  expect(getByText('Sold out')).toHaveAttribute('disabled')
})

it('calls onAddToCart when button pressed', () => {
  const onAddToCart = jest.fn()
  const { getByText } = render(<Standard onAddToCart={onAddToCart} />)
  fireEvent.click(getByText('Add to Cart'))
  expect(onAddToCart).toHaveBeenCalled()
})
