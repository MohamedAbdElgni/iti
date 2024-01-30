import React from "react";
import MainBtn from "./MainBtn";
class CompRightAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Component Right About'
        };
    }
    render() {
        return (

            <div className="col-md-6">
                <div className="row">
                    <p className="text-dark text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="col-md col-sm text-start">
                    <MainBtn txt="Download Cv" color="dark" custbtn="aboutbtn" /></div>
                </div>
            </div>

        );
    }
}



export default CompRightAbout;