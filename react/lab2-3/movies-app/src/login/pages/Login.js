import { useState } from "react";
import Gbtn from "../UtilsBoxes/BtnsLogin";
import Text from "../UtilsBoxes/Text";
import CheckBox from "../UtilsBoxes/CheckBox";
import "./styles.css";
import { Container } from "@mui/material";
function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [Errors, setErrors] = useState({
        emailError: false,
        emailHelperText: "",
        passwordError: false,
        passwordHelperText: ""
    });

    const emailregx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passregx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


    const ChangeData = (e) => {

        if (e.target.name === "email") {
            setData({ ...data, email: e.target.value });

            setErrors({
                ...Errors,
                emailError: e.target.value.length === 0 || !emailregx.test(e.target.value) ? true : false
                , emailHelperText: e.target.value.length === 0 ? "Email is required" : ""
            });
        } else if (e.target.name === "password") {
            setData({ ...data, password: e.target.value });
            setErrors({
                ...Errors,
                passwordError: e.target.value.length === 0 || !passregx.test(e.target.value) ? true : false,
                passwordHelperText: e.target.value.length === 0 ? "Password is required" : !passregx.test(e.target.value) ? "Password must contain at least 8 characters" : ""
            });
        }

    }

    const ShowPassFunc = () => {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }





    return (
        <Container maxWidth="xl" className="logreg-box" sx={{boxShadow: 3}}>
            <h1>Login</h1>
            <Text id="email" label="Email" type="email" name="email" value={data.email} onChange={(e) => ChangeData(e)} error={Errors.emailError} helperText={Errors.emailHelperText} />
            <Text id="password" name="password" label="Password" type="password" value={data.password} onChange={(e) => ChangeData(e)} error={Errors.passwordError} helperText={Errors.passwordHelperText} />
            <CheckBox onChange={() => { ShowPassFunc() }} name="show Password" color="primary" label="Show Password" />
            <Gbtn variant="contained" color="primary" size="large" text="Login" />
        </Container>
    );
}



export default Login;