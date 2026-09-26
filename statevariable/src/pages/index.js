import React from "react";
export default function Home() {
  const [counter, setCounter] = React.useState(11);
  return (
    <>
      <h1>State Variable</h1>
      <p className="circle">Value of Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 2)}>Increment</button>
      <button onClick={() => setCounter(counter - 2)}>Decrement</button>
    </>
  );
}
