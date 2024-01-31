import React from "react";
import MainBtn from "./MainBtn";
class CompFooter extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <h1 className='text-lg-start'>Get in touch</h1>

                    <div className='row'>
                        <div className='col-md-2 text-md-end text-center mb-3 mb-md-0'>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className='col-md-4 text-md-start text-center'>
                            <span>01098557840</span>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-md-2 text-md-end text-center mb-3 mb-md-0'>
                            <i class="fa-brands fa-github"></i>
                        </div>
                        <div className='col-md-4  text-md-start text-center'>
                            <span>
                                <a className='text-light' href='https://github.com/MohamedAbdElgni'>GitHub</a>
                            </span>
                        </div>
                    </div>

                </div>

                <div className='col-md-4   p-5'>
                    <MainBtn txt="Contact-Me" color="light" />
                </div>

                <div className='col-md-4 text-center justify-content-center align-content-center' >
                    <div className='row text-lg-center'>
                        <div className='col-md-4 text-md-center text-center mb-3 mb-md-0'>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className='col-md-4 text-md-center text-center mb-3 mb-md-0'>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className='col-md-3 text-md-center text-center mb-3 mb-md-0'>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                    </div>

                    <div className='row mt-5 justify-content-center text-lg-center'>
                        <h5 className='text-center'>Copy right 2024</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompFooter;