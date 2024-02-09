import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyCard from "../../Components/MyCard";



function UserDetails(){

    const userId = useParams();
    // props.match.params.id
    console.log(userId)

    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`https://retoolapi.dev/2d474J/data/${userId.id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))
    },[])



    return(
        <>
            <h1 className="text-center text-warning"> User Details  </h1>
            <MyCard name={user.name} img={user.image} 
            bio={user.about} num={user.age} pos={user.position}/> 

        </>
    )
}

export default  UserDetails;