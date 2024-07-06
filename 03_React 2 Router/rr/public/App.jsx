import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Route } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /><Home /></>
    },
    {
      path: '/about',
      element: <> <Navbar /><About /></>
    },
    {
      path: '/contact',
      element: <> <Navbar /><Contact /></>
    }
  ])

  // const router1 = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/about' element={<About />} />
  //     </>

  //   )
  // )

  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
