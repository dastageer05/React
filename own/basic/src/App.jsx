import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <>
      <div className="card">
      <h1>Count: {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          click to increment
        </button>
      </div>
    </>
  );
}

export default App;
