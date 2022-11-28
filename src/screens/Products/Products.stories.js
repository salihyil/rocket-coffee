import React from 'react'
import Products from './Products'

export default { title: 'screens/Products', component: Products }
const Template = args => <Products {...args} />

export const Standard = Template.bind({})
Standard.args = {}
