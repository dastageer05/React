import React , {useContext} from 'react'
import {counterContext} from '../context/context'

const contextt = () => {
    const counter = useContext(counterContext)
    const {value} = useContext(counterContext)
  return (
    <div>
      {counter}
      <button onClick={()=>value.setCount((count)=>count+1)}>i am also setCount</button>
    </div>
  )
}

export default contextt
