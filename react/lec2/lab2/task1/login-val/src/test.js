import React, { useState } from "react";

const TestManual = () => {
    // this is the initial state of the values for the form
    const [values, setValues] = useState({ email: "", password: "" });
    // this is the initial state of the errors for the form
    const [errors, setErrors] = useState({});
    // this is the initial state of the isSubmitting for the form

    const handleChange = (e) => {
        // this is the event that is passed in for the onChange event for the input
        // name is the name of the input
        // value is the value of the input
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

       // const passwordRegex = /(?=.*[0-9])/;
        
        //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
    

    return (
        <form >
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                
            />
            <div className="input-feedback">email error</div>

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                
            />
            <div className="input-feedback">pass error</div>

            <button type="submit">
                Login
            </button>
        </form>
    );
};

export default TestManual;
