import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Loader from "../../Components/Loader"
import MyCard from "../../Components/MyCard"
import { changeLoader } from "../../Store/Actions/LoaderAction"
import { getUsersList } from "../../Store/Actions/UsersAction"

function ListUsers(){
    const myLoader = useSelector((state) => state.combineLoader.isLoading) // 
    const dispatch = useDispatch()
    const users = useSelector((state) => state.combineUsers.users)

    useEffect(() => {
        dispatch(getUsersList())
    },[])

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