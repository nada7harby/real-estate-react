import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImagesSlider from './components/common/ImagesSlider.jsx'
import OverviewCmp from './components/common/overviewCmp.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ImagesSlider/>
    
    <OverviewCmp/>
  
    </>
  )
}

export default App
