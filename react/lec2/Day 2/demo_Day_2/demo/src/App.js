import logo from './logo.svg';
import './App.css';
import AppClassCompnent from './Pages/AppClass/AppClassComponent';
import UserClass from './Pages/UserClass/users';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppFunctionComponent from './Pages/AppFunction/AppFunctionComponent';
import AddUser from './Pages/AddUser/AddUser';
function App() {
  return (
    <>
      <AddUser />
      {/* <AppFunctionComponent /> */}
      {/* <AppClassCompnent /> 
      <UserClass /> */}
    </>
  );
}

export default App;
