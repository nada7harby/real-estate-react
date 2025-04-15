import React, { Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Toaster } from "react-hot-toast";

// Components
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import LoadingSpinner from "./components/common/LoadingSpinner";

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
import ClientTestimonials from "./components/pages/ClientTestimonials.jsx";

// Providers
import { FavoriteProvider } from "./components/common/FavoriteContext";
import { CompareProvider } from "./components/common/CompareContext";
import { PropertiesProvider } from "./components/common/PropertiesContext";
import { AuthProvider, useAuth } from "./components/common/AuthContext";

const stripePromise = loadStripe(
  "pk_test_51RC3rdGavfGkHWZgLjk33Vfew5sg4nqKbBuoRt5gg2z4Unr7M3mrUpiRGNKkbA2wwdSwBCJJSw9IX1hLCwTXASXP00kwvlxaEH"
);

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

// Layout component to wrap pages with NavBar and Footer
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

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

  const [authMode, setAuthMode] = useState("login");

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <PropertiesProvider>
          <CompareProvider>
            <FavoriteProvider>
              <Router>
                <Layout>
                  <Toaster position="top-center" reverseOrder={false} />
                  <Elements stripe={stripePromise}>
                    <Suspense fallback={<LoadingSpinner />}>
                      <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/properties" element={<PropertiesGridPage />} />
                        <Route path="/property/:id" element={<PropertySingle />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route 
                          path="/auth" 
                          element={
                            <AuthForm 
                              mode={authMode} 
                              setMode={setAuthMode} 
                              onClose={() => {}} 
                            />
                          } 
                        />
                        <Route path="/favorites" element={<MyFavorites />} />
                        <Route path="/compare" element={<Compare />} />
                        <Route path="/compared" element={<ComparePage />} />
                        <Route path="/testimonials" element={<ClientTestimonials />} />

                        {/* Protected Routes */}
                        <Route
                          path="/dashboard"
                          element={
                            <ProtectedRoute>
                              <Dashboard />
                            </ProtectedRoute>
                          }
                        />
                        <Route
                          path="/checkout"
                          element={
                            <ProtectedRoute>
                              <CheckoutPage />
                            </ProtectedRoute>
                          }
                        />
                        <Route
                          path="/payments"
                          element={
                            <ProtectedRoute>
                              <NumberOfPayments />
                            </ProtectedRoute>
                          }
                        />

                        {/* Catch all route */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
                    </Suspense>
                  </Elements>
                </Layout>
              </Router>
            </FavoriteProvider>
          </CompareProvider>
        </PropertiesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;