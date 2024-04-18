import { useState } from 'react'
import './App.css'
import LeftArea from './comps/LeftArea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>todo App</h1>
        <LeftArea />  
      </div>
    </>
  )
}

export default App
