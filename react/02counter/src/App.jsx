import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)   // hum chahe toh setConter ki jagah kuch bho naam daal sakte hai ex chaiCounter, nameCounter ,and etc.

  //let counter = 15

  const addValue = () => {
    // counter += 1
    setCounter(counter + 1)
    console.log("clicked",counter)
  }

  const removeValue = () => {
    //counter -= 1
    setCounter(counter - 1)
    console.log("clicked",counter)
  }

  return (
    <>
      <h1>chai aur code | inderjeet singh</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value +1</button>
      <br />
      <button onClick={removeValue}>Remove value -1</button>
      <br />
        <p>Current counter value: {counter}</p>
    </>
  )
}

export default App
