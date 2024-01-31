import React from "react";

class CompCard extends React.Component {

    render() {

        return (
            <>  
                <div className="col-md-4">
                <div className={`card p-5 shadow ${this.props.color}`}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.txt}</p>
                        <p>Go somewhere</p>
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default CompCard;