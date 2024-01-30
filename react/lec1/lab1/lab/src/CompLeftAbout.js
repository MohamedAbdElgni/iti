import React from "react";
import HeaderOne from "./HeaderOne";
class CompLeftAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Component Left About'
        };
    }
    render() {
        return (
            <div className="col-md-6">
                <HeaderOne color="dark" name="About Me" />
            </div>
        );
    }
}
export default CompLeftAbout;