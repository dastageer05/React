import React, {useContext} from 'react'
import { counterContext } from '../context/context'


const Button = () => {
  const value = useContext(counterContext)
  return (
    <div>
      {value.count}
      <button onClick={()=> value.setCount((count) => count +1)}>I am button</button>
    </div>
  )
}

export default Button
