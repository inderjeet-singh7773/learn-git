import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

// src/App.jsx

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">tailwind test</h1>

      <Card username="inderjeet" btnText="click me" />
      <Card username="manjeet" btnText="visit me" />
      <Card />
    </>
  );
}


export default App;
