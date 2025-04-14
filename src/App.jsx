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

  // Layout component for pages with NavBar and Footer
  const MainLayout = ({ children }) => (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );

  // Layout component for auth pages without NavBar and Footer
  const AuthLayout = ({ children }) => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {children}
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <PropertiesProvider>
        <CompareProvider>
          <FavoriteProvider>
            <Router>
              <Toaster position="top-center" reverseOrder={false} />
              <Elements stripe={stripePromise}>
                <Routes>
                  <Route path="/login" element={
                    <AuthLayout>
                      <AuthForm mode="login" setMode={setMode} onClose={() => {}} />
                    </AuthLayout>
                  } />
                  <Route path="/register" element={
                    <AuthLayout>
                      <AuthForm mode="register" setMode={setMode} onClose={() => {}} />
                    </AuthLayout>
                  } />

                  <Route path="/" element={
                    <MainLayout>
                      <Home />
                    </MainLayout>
                  } />
                  <Route path="/dashboard" element={
                    <MainLayout>
                      <Dashboard />
                    </MainLayout>
                  } />
                  <Route path="/properties" element={
                    <MainLayout>
                      <PropertiesGridPage />
                    </MainLayout>
                  } />
                  <Route path="/property/:id" element={
                    <MainLayout>
                      <PropertySingle />
                    </MainLayout>
                  } />
                  <Route path="/compared" element={
                    <MainLayout>
                      <ComparePage />
                    </MainLayout>
                  } />
                  <Route path="/compare" element={
                    <MainLayout>
                      <Compare />
                    </MainLayout>
                  } />
                  <Route path="/MyFavorites" element={
                    <MainLayout>
                      <MyFavorites />
                    </MainLayout>
                  } />
                  <Route path="/checkout" element={
                    <MainLayout>
                      <CheckoutPage />
                    </MainLayout>
                  } />
                  <Route path="/payments" element={
                    <MainLayout>
                      <NumberOfPayments />
                    </MainLayout>
                  } />
                  <Route path="/contact" element={
                    <MainLayout>
                      <Contact />
                    </MainLayout>
                  } />
                  <Route path="/ClientTestimonials" element={
                    <MainLayout>
                      <ClientTestimonials />
                    </MainLayout>
                  } />
                </Routes>
              </Elements>
            </Router>
          </FavoriteProvider>
        </CompareProvider>
      </PropertiesProvider>
    </ThemeProvider>
  );
}

export default App;
