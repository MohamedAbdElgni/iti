
import { axiosInstance } from "../../Network/axiosInstance"
export const getUsersList = () => (dispatch)  => {

    return axiosInstance.get("/data/")
    .then((res) => dispatch({
        type: "GET_USERS_LIST",
        payload: res.data
    })) 
    .catch((err) => console.log(err))
}