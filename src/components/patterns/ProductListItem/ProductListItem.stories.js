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
  price: '2.2',
  imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/'
}

export const SoldOut = Template.bind({})
SoldOut.args = {
  name: 'Standard Coffee',
  price: '2.2',
  imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
  isSoldOut: true
}

export const onSale = Template.bind({})
onSale.args = {
  name: 'Standard Coffee',
  price: '2.2',
  imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
  isSoldOut: false,
  isOnSale: true
}
