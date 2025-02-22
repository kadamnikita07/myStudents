import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './Question'

function App() {
  console.log("hi");
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Question/>
    
    </>
  )
}

export default App
