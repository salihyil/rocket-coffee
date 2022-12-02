import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { ROUTES } from '../constants/routes'
import Navigation from '../components/patterns/Navigation/Navigation'
import Cart from '../screens/Cart/'
import UserProfile from '../screens/UserProfile/'
import Products from '../screens/Products'

const PRODUCTS = [
  {
    path: ROUTES.ROOT,
    element: <Products />
  }
]

const CART = [
  {
    path: ROUTES.CART,
    element: <Cart />
  }
]

const USER_PROFILE = [
  {
    path: ROUTES.USER_PROFILE,
    element: <UserProfile />
  }
]

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Navigation />,
    children: [...PRODUCTS, ...CART, ...USER_PROFILE]
  },
  { path: '*', element: <Navigate to={ROUTES.ROOT} replace /> }
])
export { router }
