import MyButton from "../../Components/MyButton";
import MyTitle from "../../Components/MyTitle";
import {useSelector, useDispatch} from "react-redux";
import { changeLang } from "../../Store/Actions/LangAction";
import { useContext } from "react";
import { LanguageContext } from "../../Context/langContext";

function Home(){


    const {contextLang, setContextLang} = useContext(LanguageContext);

    const myTheme = useSelector((state) => state.combineTheme.theme)

    // to read data from store --> useSelector
    const myLang = useSelector((state) => state.combineLang.lang)

    const hello = () => {
        alert("hello mohammed")
    }
    const dispatch = useDispatch()
    const changeMyLang = () => {
        // to change data --> useDispatch
        dispatch(changeLang(myLang == "EN" ? "AR" : "EN" ))
    }
    return(
        <> 
             <MyTitle title="Home Page" />
             <p> test new page using routing </p> 
             <MyButton btnclass="btn btn-info" btnname="badry" fun={() => hello()} />
            <h1 className="text-center text-primary"> My Current Lang is {myLang} </h1>

            <button className="btn btn-info" 
            onClick={() => changeMyLang()}> Change Lang </button>

            <h1 className="text-center text-danger"> My Current Theme is {myTheme} </h1>

            <h1 onClick={() => setContextLang("AR from context")} className="text-center text-warning"> My Current LANG Context is {contextLang} </h1>
            
        </>
    )
}

export default  Home;