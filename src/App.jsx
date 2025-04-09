import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImagesSlider from './components/common/ImagesSlider.jsx'
import OverviewCmp from './components/common/overviewCmp.jsx'
import PropertySingle from './components/pages/PropertySingle.jsx'
function App() {
  return (
    <>
    {/* <ImagesSlider/>
    
    <OverviewCmp/> */}
    <PropertySingle/>
    </>
  );
}

export default App;
