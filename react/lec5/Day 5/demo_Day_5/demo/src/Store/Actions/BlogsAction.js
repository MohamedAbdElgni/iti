import axios from "axios"

export const getBlogs = () => (dispatch) => {
    return axios.get("https://newsapi.org/v2/everything?q=sports&apiKey=5bb3f7c3d7c049dea9425d57e5561caa")
    .then((res) => {
        dispatch({
            type:  'GET_BLOGS', // Name Of Action
            payload: res.data.articles
        })
    })
    .catch((err) => console.log(err))
}
