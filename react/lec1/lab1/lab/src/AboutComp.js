import React from "react";
import CompLeftAbout from "./CompLeftAbout";
import CompRightAbout from "./CompRightAbout";
class AboutComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'About Component'
        };
    }
    render() {
        return (
                <>
                <CompLeftAbout />
                <CompRightAbout />
                </>
        );
    }
}

export default AboutComp;