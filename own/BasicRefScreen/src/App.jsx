import './App.css'
import { Route, Routes, Router, useLocation } from 'react-router-dom'
import {Card1, Card2, Card3, Card4} from './components/context'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold '>Project 2</h1>
      {/* <Card1 /> */}
        <Routes>
          <Route path="/" element={<Card1 />}  />
          <Route path="/card2" element={<Card2 />} />
          <Route path="/card3" element={<Card3 />} />
          <Route path="/card4" element={<Card4 />} />

        </Routes>
    </>
  )
}

export default App
