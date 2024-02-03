import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MyCard from "../../Components/MyCard"

function ListUsers(){

    const [users, setUsers] = useState([])
    // didmount --> load page --> jquery.ready
    // didupdate --> state
    // willunmounty --> return
    useEffect(() => {
        //  axios.METHOD
        axios.get("https://retoolapi.dev/2d474J/data/")
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err))
    }, [])

    return(
        <>
            <h1 className="text-primary text-center"> List Users </h1> 
            {
                users.map((user, index) => {
                    return (
                        <div key={user.id}>
                            {/* <Link to={`/userdetails/${user.id}`}>  */}
                                <MyCard  name={user.name}  img={user.image} bio={user.about} path={`/userdetails/${user.id}`}/>
                            {/* </Link> */}

                            {/* <li className="text-primary">
                                <Link to={`/userdetails/${user.id}`}>
                                    {user.name}
                                </Link>   
                            
                             </li>
                            <li className="text-info"> {user.position} </li> */}
                        </div>
                    )
                })
            }
        </>
    )
}

export default ListUsers