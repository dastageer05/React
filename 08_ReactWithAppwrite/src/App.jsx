import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   try{
  //     authService.getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login({ userData }))
  //       } else {
  //         dispatch(logout())
  //       }
  //     })
  //   }
  //   catch(error){
  //     console.log("useEffect :: getCurrentuser :: error", error);
  //   }
  //   finally{() => setLoading(false)}
  // }, [])

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ?(
    <div className='min-h-screen flex flex-col bg-gray-100 '>
      <div className='w-full block'>
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null //we can display anything for loading time
}

export default App