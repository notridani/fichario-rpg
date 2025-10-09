import { useState } from 'react'
import Ficha from './paginas/Ficha'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div><Ficha/></div>
    
  )
}

export default App