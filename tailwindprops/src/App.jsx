// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Card from "./components/card.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline rounded-xl bg-green-400 p-5 mb-5">
        Hello world!
      </h1>
      <Card username="Samsung" btnText="Click here" />
      <Card username="Macbook" btnText="Visit here" />
    </>
  );
}

export default App;
