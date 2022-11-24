import React from 'react'
import ProductListItem from '../ProductListItem'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

it('shows on sale label when isOnSale', () => {
  const { getByText } = render(
    <ProductListItem name="Mocha" price={3.5} imageUrl="..." isOnSale />
  )
  expect(getByText(/(On Sale)/)).toBeInTheDocument()
})

it('disables the button when disabled', () => {
  const { getByText } = render(
    <ProductListItem name="Mocha" price={3.5} isSoldOut />
  )
  expect(getByText('Sold out')).toHaveAttribute('disabled')
})

// A mock function, gerçek bir fonksiyon yerine test ederken kullanabileceğimiz bir şeydir.
// Mock function’la jest.fn olarak etkileşime geçeceğiz.
it('calls callback when button Add to Cart pressed', () => {
  const onAddToCart = jest.fn()
  const { getByText } = render(
    <ProductListItem name="Mocha" price={3.5} onAddToCart={onAddToCart} />
  )
  fireEvent.click(getByText('Add to Cart')) // Tıklandığında Add to Cart yazısı gelsin
  expect(onAddToCart).toHaveBeenCalled() // Fonksiyon çağırıldı mı kontrolü?
})
