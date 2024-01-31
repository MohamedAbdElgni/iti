import React from "react";

class MainBtn extends React.Component {
    
    render() {
        return (
            <button className={`btn btn-outline-${this.props.color} border btn-lg ${this.props.custbtn}`}>{this.props.txt}</button>
        );
    }
}

export default MainBtn;