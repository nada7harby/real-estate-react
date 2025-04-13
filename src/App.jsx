import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
// import PropertySingle from './components/pages/PropertySingle'
// import Contact from './components/pages/Contact'
import NavBar from './components/layout/NavBar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ComparePage from './components/pages/ComparePage';
import PropertiesGridPage from './components/pages/PropertiesGridPage';
import { FavoriteProvider } from './components/common/FavoriteContext'; 
import { CompareProvider } from './components/common/CompareContext';
import Footer from './components/layout/Footer'
import PropertySingle from './components/pages/PropertySingle'
import "./App.css";
import Compare from "./components/pages/Compare.jsx";


import Home from "./components/pages/Home.jsx";
import MyFavorites from "./components/pages/MyFavorites.jsx";

function App() {
  const theme = createTheme({
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: '#1cb3ff', 
          },
        },
      },
    },
  });
  
  return (
<<<<<<< Updated upstream
    <ThemeProvider theme={theme}>
    <CompareProvider>
    <FavoriteProvider>
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/properties" element={<PropertiesGridPage/>} />
            <Route path="/property/:id" element={<PropertySingle />} />
            <Route path="/compared" element={<ComparePage />} />
            {/* <Route path="/property-single" element={<PropertySingle />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </FavoriteProvider>
    </CompareProvider>
    </ThemeProvider>
=======
    <>
      <Compare />
      {/* <MyFavorites /> */}
      {/* <Home></Home> */}
    </>
>>>>>>> Stashed changes
  );
}

export default App;
