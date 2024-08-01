import {  useState } from "react";
import "./App.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import User from "./components/User";

import {counterContext} from './context/context'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path:'/',
      element: <><Navbar /><Home /></>
    },
    {
      path:'/user/:username',
      element:<><Navbar/><User/></>
    },
  ])

  return (
    <>
      <counterContext.Provider value={{count,setCount}}>
      <RouterProvider router={router}/>
      </counterContext.Provider>
    </>
  );
}

export default App;
