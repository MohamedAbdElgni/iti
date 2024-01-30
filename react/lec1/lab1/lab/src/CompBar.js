import React from "react";
import './progress.css'
class CompBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'progress bar'
        };
    }
    render() {
        return (
                <div className="progress mb-3">
                    <div className="label col-2 text-align-center">{this.props.name}</div>
                    <div className="progress-bar " style={{ width: this.props.data }} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                </div>
        );
    }
}

export default CompBar;