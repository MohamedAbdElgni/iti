import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import MyCard from "../../Components/MyCard";
import { axiosInstance } from "../../Network/axiosInstance";
import {useSelector} from "react-redux";



function UserDetails(){

    const userId = useParams();
    // props.match.params.id
    console.log(userId)

    const [user, setUser] = useState({})

    const myLoader = useSelector((state) => state.combineLoader.isLoading)

    useEffect(() => {
        axiosInstance.get(`/data/${userId.id}`)
        .then((res) => setUser(res.data) )
        .catch((err) => console.log(err))
    },[])



    return(
        <>
            <h1 className="text-center text-warning"> User Details  </h1>

            {myLoader ? <Loader/> : <MyCard name={user.name} img={user.image} 
            bio={user.about} num={user.age} pos={user.position}/> }
            
            

        </>
    )
}

export default  UserDetails;