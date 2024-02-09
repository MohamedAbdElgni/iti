import { Link } from "react-router-dom"


function MyCard(props){



    return(
        <>
            <div className="card container" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                {props.path ? 
                    <Link to={props.path }>  <h3 className="card-title">{props.name}</h3> </Link> : 
                    <h3 className="card-title">{props.name}</h3>
                
            }
               
                <h4 className="card-text text-primary">{props.pos}</h4>
                <p className="card-text">{props.bio}</p>
                <p className="card-text text-primary">
                    {props.num && <p>Age is: {props.num}</p> }
                    </p>
            </div>
            </div>
        </>
    )
}

export default MyCard