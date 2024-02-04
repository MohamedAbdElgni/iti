
import './App.css';
import { Container } from '@mui/material';
//import Login from './login/pages/Login';
//import Regester from './login/pages/Regester';
import ToDo from './login/pages/ToDo';
function App() {

  return (
    <Container maxWidth="xl" className="main">
      {/* <Login /> */}
      {/* <Regester /> */}
      <ToDo />
    </Container>
  );
}

export default App;
