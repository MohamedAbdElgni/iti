import React from "react";
import HeaderOne from "./HeaderOne";
import ParOne from "./ParOne";
import MainBtn from "./MainBtn";
class LeftWrap extends React.Component {
    render() {
        return (
            <div className="col-md-6  ">
                <HeaderOne name="Mohamed Ahmed" color="white" />
                <ParOne txt="I'm Python web developer ." color="white" />
                <MainBtn txt="Contact-Me" color="light" />
            </div>
        );
    }
}

export default LeftWrap;