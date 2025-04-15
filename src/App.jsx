import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import NavBar from './components/layout/NavBar'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { FavoriteProvider } from './components/common/FavoriteContext'
import { PropertiesProvider } from './components/common/PropertiesContext'
import Footer from './components/layout/Footer'
import { allRoutes } from './routes'
import LoadingSpinner from './components/common/LoadingSpinner'

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
      <PropertiesProvider>
        <FavoriteProvider>
          <Router>
            <div className="min-h-screen flex flex-col">
              <NavBar />
              <main className="flex-grow">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {allRoutes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                    {/* Catch all route - redirect to home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </FavoriteProvider>
      </PropertiesProvider>
    </ThemeProvider>
  );
}

export default App;
