import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Loader from "../../Components/Loader"
import MyCard from "../../Components/MyCard"
import { changeLoader } from "../../Store/Actions/LoaderAction"

function ListUsers(){

    const [users, setUsers] = useState([])

    const myLoader = useSelector((state) => state.combineLoader.isLoading) // 

    console.log(myLoader)

    const dispatch = useDispatch()


    useEffect(() => {
        axios.get("https://retoolapi.dev/2d474J/data/")
        .then((res) => {
            setUsers(res.data)
            dispatch(changeLoader(false))
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <>
            <h1 className="text-primary text-center"> List Users </h1> 
            {myLoader ? <Loader /> :  users.map((user, index) => {
                    return (
                        <div key={user.id}>
                                <MyCard  name={user.name}  img={user.image} bio={user.about} path={`/userdetails/${user.id}`}/>
                        </div>
                    )
                }) }
        </>
    )
}

export default ListUsers