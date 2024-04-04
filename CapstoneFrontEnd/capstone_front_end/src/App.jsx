import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prova from './components/prova.jsx'
import Navbar from './components/navbar.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Prova />
    </>
  )
}

export default App
