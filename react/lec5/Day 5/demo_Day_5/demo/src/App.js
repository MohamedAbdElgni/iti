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
import {useSelector} from "react-redux";
import { useState } from 'react';
import { LanguageContext } from './Context/langContext';


function App() {

  // get data 
  const lang = useSelector((state) => state.combineLang.lang)
// ltr --> left to right
// rtl --> right to left
const theme = useSelector((state) => state.combineTheme.theme)

const [contextLang, setContextLang] = useState("EN from context")

  return (
    <div dir={lang == "EN" ? "ltr" : "rtl"} 
         className={theme == "Light" ? "bg-light text-dark" : "bg-dark text-light"}>
      
      <LanguageContext.Provider value={{contextLang, setContextLang}}> 
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
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
