import React from "react";

class ParOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Paragraph One'
        };
    }
    render() {
        return (
        <p className={`text-${this.props.color} mt-3`}>{this.props.txt}</p>
        );
    }
    }

export default ParOne;