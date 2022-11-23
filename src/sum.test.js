function sum(a, b) {
  return a + b
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

it('adds two numbers correctly', () => {
  expect(sum(5, 6)).toEqual(17)
})