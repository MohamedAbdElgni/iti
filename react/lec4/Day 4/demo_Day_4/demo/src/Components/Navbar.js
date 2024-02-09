import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { changeLang } from "../Store/Actions/LangAction";
import { ThemeAction } from "../Store/Actions/ThemeAction";

function Navbar(){

    // to get data from store 
    // use function component and hooks 
    // useSelector 

    const myTheme = useSelector((state) => state.combineTheme.theme)

    const language = useSelector((state) => state.combineLang.lang)
    const dispatch = useDispatch()

    const changeCurrentLang = () => {
        // to change in state in store => useDispatch
        dispatch(changeLang(language == "EN" ? "AR" : "EN"))
    }

    const changeCurrentTheme = () => {
        dispatch(ThemeAction(myTheme == "Light" ? "Dark" : "Light"))
    }

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/class">Class Component</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/fun">Function Component</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">Users Component</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/adduser">Add User</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/listusers">List Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/blogs">Blogs</Link>
                </li>

                <li className="nav-item">
                    <button  className="btn btn-danger" onClick={() => changeCurrentLang()}>Current Lang: {language} </button>
                </li>

                <li className="nav-item">
                    <button  className="btn btn-info"
                    onClick={() => changeCurrentTheme()} 
                    >Current Theme: {myTheme} </button>
                </li>



                
            </ul>
            
            </div>
        </div>
    </nav>
        
        </>
    )

}

export default Navbar;