import React from "react";

class ParOne extends React.Component {

    render() {
        return (
            <p className={`text-${this.props.color} mt-3`}>{this.props.txt}</p>
        );
    }
}

export default ParOne;