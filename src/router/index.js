import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Navigation from '../components/patterns/Navigation/Navigation'

import Cart from '../screens/Cart/'
import UserProfile from '../screens/UserProfile/'
import Products from '../screens/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        path: '/',
        element: <Products />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/userProfile',
        element: <UserProfile />
      }
    ]
  }
])
export { router }
