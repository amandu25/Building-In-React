import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  function addCard() {
    setCount(); //It will not increment 4 times because the UI updation happens in batches. Fibre is used here in this scenario. Instead write (prevCount) => prevCount + 1 in the brackets which is is a hidden parameter in the setCount function. This is called as functional update. This is the best way to update the state when it depends on the previous state.
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log("add card");
  }
  function removeCard() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <button onClick={addCard} className="my-5">
        Add Card
      </button>
      <br></br>
      <button onClick={removeCard} className="my-5">
        Remove Card
      </button>

      <h1 className="my-5">Total Cards: {count}</h1>
    </>
  );
}

export default App;
