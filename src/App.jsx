import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DayFinder from './DayFinder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DayFinder />
    </>
  )
}

export default App
