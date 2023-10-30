import React from 'react'
import About from './components/About'
import Home from './components/Home'
import Contacts from './components/Contacts'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'

const router = createHashRouter([
  {path:'' , element:<Layout/> , children: [

    {path:'' , element:<Home/>},
    {path:'home' , element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'Portfolio' , element:<Portfolio/>},
    {path:'contacts' , element:<Contacts/>},
    {path:'*' , element:<h1>Sorry Not Found</h1>}

  ]},




])

export default function App() {
  return (
  <>
<RouterProvider  router={ router  } />
  </>
  )
}


