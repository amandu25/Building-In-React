import { useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  let [count, setCount] = useState(0); // [0, function]
  const addValue = () => {
    console.log("Value Added", count);
    setCount(count + 1);
  };
  const removeValue = () => {
    if (count > 0) {
      console.log("Value Removed", count);
      setCount(count - 1);
    } else {
      console.log("Error: Count cannot be less than 0");
    }
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
