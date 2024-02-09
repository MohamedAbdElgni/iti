import axios from "axios"
import { useEffect, useState } from "react"
import MyCard from "../../Components/MyCard";
import {useDispatch, useSelector} from "react-redux";
import { getBlogs } from "../../Store/Actions/BlogsAction";
import Loader from "../../Components/Loader";


function Blogs() {

    const isLoader = useSelector((state) => state.combineLoader.isLoading)

    // const [articles, setArticles] = useState([])
    const [keyword, setKeyword] = useState("food")

    const dispatch = useDispatch();
    const articles = useSelector((state) =>  state.combineBlogs.blogs)
    useEffect(() => {
        dispatch(getBlogs())
    },[])

    // useEffect(() => {
    //     axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=5bb3f7c3d7c049dea9425d57e5561caa`)
    //     .then((res) =>  setArticles(res.data.articles))
    //     .catch((err) =>  console.log(err))
    // }, [keyword])

    const handleChange = (e) => {
        // console.log(e.target.value)
        setKeyword(e.target.value)
    }

    return(
        <> 
            <h1 className="text-center text-primary"> Blogs </h1>

            <select class="form-select" aria-label="Default select example" 
            onChange={(e) => handleChange(e)} value={keyword}>
                <option selected>Open this select menu</option>
                <option value="food">Food</option>
                <option value="sport">Sport</option>
                <option value="development">Development</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="ai">AI</option>
                
            </select>

            {isLoader? <Loader/> : articles.map((article) => {
                return (
                    <MyCard name={article.title} bio={article.description} img={article.urlToImage} /> 
                )
            })}

             {/* {}   */}
        
        </>
    )
}

export default Blogs