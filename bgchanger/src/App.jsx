import { useState } from "react";

function App() {
  let [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ps-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline—none px-4 py-1 rounded-full text-white shadow—lg"
            onClick={() => setColor("Red")} //The onclick accepts only a function but if we write setColor("Red") it will return a value to onClick which is not required. So we use a callback in such cases.
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            className="outline—none px-4 py-1 rounded-full text-white shadow—lg"
            onClick={() => setColor("Green")}
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            className="outline—none px-4 py-1 rounded-full text-white shadow—lg"
            onClick={() => setColor("Blue")}
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
