import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0)
  // useRef can use to store item throughtout the execution not change by rerender

  const btnref = useRef('')
  //we can access one element do changes init doc say it will not rerender don't use as value variable 

  const [form, setform] = useState({email:'',pass:''})

  useEffect(()=>{
    // it is use to change or mainly set the state if the set is changing some where
    a.current = a.current +1;
    console.log('the count is :',a.current);

    btnref.current.style.backgroundColor ='red'

    //optional return stat
    return ()=>{
      console.log('I am run first then uppen stat.. and i clean up thing and restart this effect with new value')
    }
  });

  //handler event
  const handleChange =(e)=>{
    setform({...form, [e.target.name]:e.target.value})
    //we are setting the name value to given value
    //set form fun run slow it is asyn so for hey it store he
  } 

  //custom componets should start with uppercase
  const Ht = () => {
    return (
      <>
        <div>i am in ht variable</div>
      </>
    );
  };

  return (
    <>
      <div className="card">
        <h1>Count: {count}</h1>
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          click to increment 
        </button>

        <Ht />

        {/* {we can write js init we can use && rather then thernary oprator } */}
       
       <input type="text" name="email" value={form.email} onChange={handleChange} />
       {/* value={form.email?.form.email:""} */}
       <br />
       <input type="pasword" name="pass" value={form.pass} onChange={handleChange} />
        </div>
    </>
  )
}

export default App