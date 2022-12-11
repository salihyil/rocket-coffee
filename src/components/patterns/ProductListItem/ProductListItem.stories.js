import React from 'react'
import ProductListItem from './ProductListItem'
//import { action } from "@storybook/addon-actions";
//import { storiesOf } from "@storybook/react";

// eslint-disable-next-line no-undef
/* storiesOf("Product List Item", module).add("standard", () => <ProductListItem />); */

//Component Story Format
/* export default { title: "ProductListItem" };
export const standard = () => (
  <ProductListItem
    name="Standard Coffee"
    price={2.5}
    onAddToCart={action("Add to cart clicked")}
    imageUrl="https://source.unsplash.com/tNALoIZhqVM/200x100/"
  />
); */

export default { title: 'ProductListItem', component: ProductListItem }
const Template = args => <ProductListItem {...args} />

export const Standard = Template.bind({})
Standard.args = {
  name: 'Standard Coffee',
  price: 2.25,
  imageUrl: 'https://images.unsplash.com/photo-1596078841242-12f73dc697c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
}

export const SoldOut = Template.bind({})
SoldOut.args = {
  name: 'Standard Coffee',
  price: 2.2,
  imageUrl: 'https://images.unsplash.com/photo-1596078841242-12f73dc697c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
}

export const OnSale = Template.bind({})
OnSale.args = {
  name: 'Standard Coffee',
  price: 2.2,
  imageUrl: 'https://images.unsplash.com/photo-1596078841242-12f73dc697c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
}
