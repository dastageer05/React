// import './App.css'

import { useState, useEffect, useRef } from "react"
import Navbar from "./components/Navbar"

// function App() {
//   const [count, setCount] = useState(0)
//   const btnRef = useRef()
//   const [todos, setTodos]= useState([
//     {
//       title: "hey 1",
//       desc:"i am one"
//     },
//     {
//       title: "hey 2",
//       desc:"i am two"
//     }
//   ])

//   useEffect(() => {
//     alert("hey welcome")
//     btnRef.current.style.backgroundColor = "grey"
//   }, [])

//   const Todo = ({todo})=>{
//     return (<>
//     <div className="todo">{todo.title}</div>
//     <div className="todo">{todo.desc}</div>
//     </>)
//   }

//   useEffect(() => {
//     // a.current = a.current +1
//     // console.log(`rerendering of a is ${a.current}`)

//     alert('count is changed')
//   }, [count])

//   return (
//     <>
//       <Navbar />
//       {/* <Todo/> */}
//       {todos.map(todo =>{
//         return <Todo key={todo.title} todo={todo}/>
//       })}
//       <div>The count is {count}</div>
//       <button ref={btnRef} onClick={() => { setCount(count + 1) }}>Update count</button>
//       <button onClick={()=> {btnRef.current.style.display = "none"}}>Change me</button>
//     </>
//   )
// }
// showbtn && to check it is true or not


//    ## 112 handling event (input )
// function App() {
//   // const [name, setName] = useState("Harry")
//   const [form, setForm] = useState({email:"",phone:""})
  
//   const handleclick =()=>{
//     alert("i am click")
//   }
//   const handlechange =(e)=>{
//     // setName(e.target.value)
//     setForm({...form, [e.target.name]:e.target.value})
//   }
//   return (
//     <>
//     <div className="button">
//       <button onClick={handleclick}>Click me</button>
//     </div>

//     <input type="text" name="email" value={form.email} onChange={handlechange} />
//     <input type="text" name="phone" value={form.phone} onChange={handlechange} />
//     </>
//   )
// }


function App() {
  
  const [cards, setCards] = useState([])

  const fetchData = async ()=>{
    let a = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await a.json()
    setCards(data)
  }

  useEffect(()=>{
    fetchData()
  }, [])
  
  return (
    <>
    <Navbar/>
    <div className="container">
      {cards.map((card)=>{
        return <div key={card.id} className="card">
          <h1>{card.title}</h1>
          <p>{card.body}</p>
          <span>{card.userId}</span>
        </div>
      })}
    </div>
    </>
  )
}

export default App
