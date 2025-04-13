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

// import "./App.css";
// import Compare from "./components/pages/Compare.jsx";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51RC3rdGavfGkHWZgLjk33Vfew5sg4nqKbBuoRt5gg2z4Unr7M3mrUpiRGNKkbA2wwdSwBCJJSw9IX1hLCwTXASXP00kwvlxaEH');

import MyFavorites from "./components/pages/MyFavorites.jsx";
//import { Elements } from '@stripe/react-stripe-js';
//import { loadStripe } from '@stripe/stripe-js';
//const stripePromise = loadStripe('pk_test_51RC3rdGavfGkHWZgLjk33Vfew5sg4nqKbBuoRt5gg2z4Unr7M3mrUpiRGNKkbA2wwdSwBCJJSw9IX1hLCwTXASXP00kwvlxaEH');


// import MyFavorites from "./components/pages/MyFavorites.jsx";

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
        <ThemeProvider theme={theme}>
            <CompareProvider>
                <FavoriteProvider>
                    <Router>
                        <div className="min-h-screen flex flex-col">
                            <NavBar />
                            <main className="flex-grow">
                            <Elements stripe={stripePromise}>

                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/properties" element={<PropertiesGridPage />} />
                                    <Route path="/property/:id" element={<PropertySingle />} />
                                    <Route path="/compared" element={<ComparePage />} />
                                    {/* <Route path="/property-single" element={<PropertySingle />} />
            <Route path="/contact" element={<Contact />} /> */}
                                </Routes>
                            </Elements>
                            </main>
                            <Footer />
                        </div>
                    </Router>
                </FavoriteProvider>
            </CompareProvider>
        </ThemeProvider>
    );
}

export default App;
