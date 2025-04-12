import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComparePage from './components/pages/ComparePage';
import PropertiesGridPage from './components/pages/PropertiesGridPage';
import { FavoriteProvider } from './components/common/FavoriteContext'; 

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FavoriteProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<PropertiesGridPage />} />
            <Route path="/compared" element={<ComparePage />} />
          </Routes>
        </Router>
      </FavoriteProvider>
    </ThemeProvider>
  );
}

export default App;
