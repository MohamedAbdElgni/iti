import React from "react";
import MyButton from "../../Components/MyButton";
import MyTitle from "../../Components/MyTitle";

class UserClass extends React.Component{

    render(){
        return(
            <> 

                <MyTitle title="Hello User Class Component" />
                
                <MyButton btnname="sign up" btnclass="btn-info" />
                <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
           
            </>
        )
    }

}

export default UserClass