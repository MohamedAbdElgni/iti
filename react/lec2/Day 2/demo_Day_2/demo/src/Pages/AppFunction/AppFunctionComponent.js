import { useEffect, useState } from "react";


function AppFunctionComponent(){
    // state setState 

    const [age, setAge] = useState("20")
    const [name, setName] = useState("Ahmed")
    const [info, setInfo] = useState({
        name: "aya",
        age: 40,
        position:  "developer",
        isAdmin: true
    })


    // life cycle method in FUNCTION COMPONENT 

    // component did mount --> load - empty array []
    useEffect(() => {
        console.log("I am the componentDidMount function");
    },[])

    // // component did update 
    useEffect(() => {
        console.log("component did update name and age changed")
    },[name, age])

    useEffect(() => {
        console.log("component did update info changed")
    },[info.name])

    // // component will unmount 
    useEffect(() => {
        return () => {
            console.log("I am the component will unmount  function");
        }
    },[])

    const changeUsersName = () => {
        setName("ali")
    }

    const changeUsersAge = () => {
        setAge("100")
    }

    const changeUsersInfo = () => {
        setInfo({
            ...info,
            name: "mona"
        })
    }

    return(
        <>
            <h1>This is a Function Component</h1>
            <h2>Name:  {name}</h2>
            <h2>Age:  {age}</h2>
            <h3> info: {info.name} {info.age} {info.position} </h3>
            <button onClick={() => changeUsersName()} className="btn btn-primary"> Change Name  </button>

            <button onClick={() => changeUsersAge()} className="btn btn-info"> Change Age  </button>
            {/* conditional rendering - ternary operator */}
            {info.isAdmin ? <button onClick={() => changeUsersInfo()} className="btn btn-danger"> Change Info  </button> : <h1 className="text-danger text-center"> hello user</h1>}

             {/* conditional rendering - Logic operator */}

             {info.isAdmin &&  <h1> Hello Admin </h1>}


            
        </>
    )


}

export default AppFunctionComponent;