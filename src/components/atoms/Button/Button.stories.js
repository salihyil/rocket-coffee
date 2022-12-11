import React from 'react'
import Button from './Button'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    children: {
      description: 'The element(s) that should be rendered within the button',
      default: 'undefined'
    },
    onClick: {
      description: 'The action that is fired when the button is pressed'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'The **button** is the component that should fire an action based on a click event.'
      }
    }
  }
}
const Template = args => <Button {...args}>{'This is a button'}</Button>

export const Standard = Template.bind({})
Standard.args = {}
