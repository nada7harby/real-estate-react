import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Components
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import PropertySingle from "./components/pages/PropertySingle";
import ComparePage from "./components/pages/ComparePage";
import PropertiesGridPage from "./components/pages/PropertiesGridPage";
import Compare from "./components/pages/Compare.jsx";
import Contact from "./components/pages/Contact.jsx";
import MyFavorites from "./components/pages/MyFavorites.jsx";
import AuthForm from "./components/pages/AuthForm.jsx";
import CheckoutPage from "./components/pages/CheckoutPage.jsx";
import NumberOfPayments from "./components/pages/NumberOfPayments.jsx";
import { Toaster } from "react-hot-toast";
// import emailjs from "@emailjs/browser";


// Providers
import { FavoriteProvider } from "./components/common/FavoriteContext";
import { CompareProvider } from "./components/common/CompareContext";
import { PropertiesProvider } from "./components/common/PropertiesContext";
import ClientTestimonials from "./components/pages/ClientTestimonials.jsx";

const stripePromise = loadStripe(
  "pk_test_51RC3rdGavfGkHWZgLjk33Vfew5sg4nqKbBuoRt5gg2z4Unr7M3mrUpiRGNKkbA2wwdSwBCJJSw9IX1hLCwTXASXP00kwvlxaEH"
);

function App() {
  const theme = createTheme({
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#1cb3ff",
          },
        },
      },
    },
  });

  const [mode, setMode] = useState("login");

  return (
    <ThemeProvider theme={theme}>
      <PropertiesProvider>
        <CompareProvider>
          <FavoriteProvider>
            <Router>
              <div className="min-h-screen flex flex-col">
                <NavBar />
                <main className="flex-grow">
                  <Toaster position="top-center" reverseOrder={false} />
                  <Elements stripe={stripePromise}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route
                        path="/login"
                        element={
                          <AuthForm
                            mode={mode}
                            setMode={setMode}
                            onClose={() => {}}
                          />
                        }
                      />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route
                        path="/properties"
                        element={<PropertiesGridPage />}
                      />
                      <Route path="/property/:id" element={<PropertySingle />} />
                      <Route path="/compared" element={<ComparePage />} />
                      <Route path="/compare" element={<Compare />} />
                      <Route path="/favorites" element={<MyFavorites />} />
                      <Route path="/checkout" element={<CheckoutPage />} />
                      <Route path="/payments" element={<NumberOfPayments />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/ClientTestimonials" element={<ClientTestimonials />} />
                      
                    </Routes>
                  </Elements>
                </main>
                <Footer />
              </div>
            </Router>
          </FavoriteProvider>
        </CompareProvider>
      </PropertiesProvider>
    </ThemeProvider>
  );
}

export default App;
