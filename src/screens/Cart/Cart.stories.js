import React from 'react'
import Cart from './Cart'

export default { title: 'screens/Cart', component: Cart }
const Template = args => <Cart {...args} />

export const Standard = Template.bind({})
Standard.args = {}
