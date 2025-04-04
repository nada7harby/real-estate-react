import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImagesSlider from './components/common/ImagesSlider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ImagesSlider/>
    </>
  )
}

export default App
