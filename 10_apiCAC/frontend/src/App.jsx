import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {

  // const [products,error,loading] = customReactQuery('/api/products')
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('')
  
    useEffect(() => {
      const controller = new AbortController()
      ;(async()=>{
        try {
          setLoading(true);
          setError(false);
          const response = await axios.get('/api/products?search='+search, {
            signal: controller.signal
          });
          console.log( response.data);
          setProducts(response.data);
        } catch (err) {
          if (axios.isCancel(error)){
            console.log('axios give default cancel error se we need totoo handle f',error.message);
            return 
          }
          console.error(err);
          setError(true);
        } finally {
          setLoading(false);
        }
      })()

      //cleanup axios ff
      return()=>{
        controller.abort()
      }
    }, [search])
  
  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>My products are on http://localhost:3000/api/products</h1>
      <input type="text" placeholder="Search"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
      {loading && (<h1>Loading...</h1>)}
      {error && (<h1>Someting went wrong</h1>)}

      <h2>Number of Products: {products.length}</h2>
    </>
  );
}

export default App;

// const customReactQuery = (urlPath)=>{
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState('')

//   useEffect(() => {
//     (async()=>{
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log( response.data);
//         setProducts(response.data);
//       } catch (err) {
//         console.error(err);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     })()
//   }, [])

//   return [products,error,loading]
// }