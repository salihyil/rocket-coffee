import React from 'react'
import UserProfile from './UserProfile'

export default { title: 'screens/UserProfile', component: UserProfile}
const Template = args => <UserProfile {...args} />

export const Standard = Template.bind({})
Standard.args = {}

