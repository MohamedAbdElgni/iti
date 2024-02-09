import logo from './logo.svg';
import './App.css';
import AppClassCompnent from './Pages/AppClass/AppClassComponent';
import UserClass from './Pages/UserClass/users';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppFunctionComponent from './Pages/AppFunction/AppFunctionComponent';
import AddUser from './Pages/AddUser/AddUser';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Components/Navbar';
import ListUsers from './Pages/ListUsers/ListUser';
import UserDetails from './Pages/UserDetails/UserDetails';
import Blogs from './Pages/Blogs/Blogs';


function App() {
  return (
    <>
      <BrowserRouter> 
        <Navbar />
          <Switch> 
            <Route exact   path={"/"}  component={Home}  />
            <Route exact  path={"/adduser"}  component={AddUser}  />  
            <Route exact path={"/fun"} component={AppFunctionComponent} />
            <Route exact path={"/class"} component={AppClassCompnent}/>
            <Route exact path={"/users"} component={UserClass} />
            <Route exact path={"/listusers"} component={ListUsers}  />
            <Route exact path={"/userdetails/:id"} component={UserDetails}  />
            <Route exact path={"/blogs"} component={Blogs}  />
            
            <Route path={"*"} component={NotFound} />
          </Switch>
      </BrowserRouter>

      {/* <AddUser />
      <AppFunctionComponent />
       <AppClassCompnent /> 
       <UserClass /> */}
    
    </>
  );
}

export default App;
