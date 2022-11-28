import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

import './Mock.server'

function App() {
  return <RouterProvider router={router} />
}

export default App
