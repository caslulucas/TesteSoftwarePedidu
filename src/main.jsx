import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'

import Home from './routes/Home'
import Newmunicipio from './routes/NewMunicipio'
import './index.css'



const router = createBrowserRouter([
 {
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/new",
      element: <Newmunicipio />,
    },
    {
      path: "/municipios",
      element: <Link />
    }
  ],
 },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
