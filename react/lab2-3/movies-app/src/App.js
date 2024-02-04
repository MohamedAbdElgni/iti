
import './App.css';
import { Container } from '@mui/material';
//import Login from './login/pages/Login';
//import Regester from './login/pages/Regester';
import ToDo from './login/pages/ToDo';
import ResponsiveAppBar from './nav/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
function App() {
  const [darkmode, setDarkmode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkmode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },

    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="xl" className="main">
        <ResponsiveAppBar checked={darkmode} change={() => setDarkmode(!darkmode)} />
        {/* <Login /> */}
        {/* <Regester /> */}
        <ToDo />
      </Container>
    </ThemeProvider>
  );
}

export default App;
