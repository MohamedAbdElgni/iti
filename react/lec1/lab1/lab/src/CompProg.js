import React from "react";
import HeaderOne from "./HeaderOne";
import CompCard from "./CompCard";
class CompProg extends React.Component {
    

    render() {

        return (
            <>

                <div className="row port-title">
                    <HeaderOne color="dark" name="Portfolio" />
                </div>
                <div className="container-fluid progs-row p-5">
                    <div className="row mx-auto mb-md-4 mb-lg-5">
                        <CompCard txt="Project One" color='gray' />
                        <CompCard txt="Project Two" color="darkgray" />
                        <CompCard txt="Project Three" color="gray" />
                    </div>
                    <div className="row mx-auto">
                        <CompCard txt="Project four" color="darkgray" />
                        <CompCard txt="Project five" color="gray" />
                        <CompCard txt="Project six" color="darkgray" />
                    </div>
                </div>

            </>
        )
    }
}

export default CompProg;