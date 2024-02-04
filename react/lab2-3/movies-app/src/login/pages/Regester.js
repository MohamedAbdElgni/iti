import { useState } from "react";
import Gbtn from "../UtilsBoxes/BtnsLogin";
import Text from "../UtilsBoxes/Text";
import { Container } from "@mui/material";
import "./styles.css";
function Regester() {
    const [data, setData] = useState({
        name: "",
        password: "",
        confpassword: "",
        email: "",
        username: "",
        date: ""
    });

    const [Errors, setErrors] = useState({
        nameError: false,
        nameHelperText: "",
        emailError: false,
        emailHelperText: "",
        passwordError: false,
        passwordHelperText: "",
        confpasswordError: false,
        confpasswordHelperText: "",
        usernameError: false,
    });

    const emailregx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    const passregx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    const usernameregx = /^[^\s]+$/;




    const ChangeData = (e) => {
            
            if (e.target.name === "name") {
                setData({ ...data, name: e.target.value });
    
                setErrors({
                    ...Errors,
                    nameError: e.target.value.length === 0 ? true : false
                    , nameHelperText: e.target.value.length === 0 ? "Name is required" : ""
                });
            } else if (e.target.name === "email") {
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
            } else if (e.target.name === "confpassword") {
                setData({ ...data, confpassword: e.target.value });
                setErrors({
                    ...Errors,
                    confpasswordError: e.target.value !== data.password ? true : false,
                    confpasswordHelperText: e.target.value !== data.password ? "Password not match" : ""
                });
            } else if (e.target.name === "username") {
                setData({ ...data, username: e.target.value });
                setErrors({
                    ...Errors,
                    usernameError: e.target.value.length === 0 || !usernameregx.test(e.target.value) ? true : false,
                });
            } else if (e.target.name === "date") {
                setData({ ...data, date: e.target.value });
            }
    
        }

        return(

            <Container maxWidth="xl" className="logreg-box" sx={{boxShadow: 3}}>
                <h1>regester</h1>
                <Text id="name" label="Name" type="text" value={data.name} onChange={ChangeData} error={Errors.nameError} helperText={Errors.nameHelperText} name="name" />
                <Text id="email" label="Email" type="email" value={data.email} onChange={ChangeData} error={Errors.emailError} helperText={Errors.emailHelperText} name="email" />
                <Text id="username" label="Username" type="text" value={data.username} onChange={ChangeData} error={Errors.usernameError} helperText={Errors.usernameHelperText} name="username" />
                <Text id="password" label="Password" type="password" value={data.password} onChange={ChangeData} error={Errors.passwordError} helperText={Errors.passwordHelperText} name="password" />
                <Text id="confpassword" label="Confirm Password" type="password" value={data.confpassword} onChange={ChangeData} error={Errors.confpasswordError} helperText={Errors.confpasswordHelperText} name="confpassword" />
                <Gbtn variant="contained" color="primary" size="large" text="Regester" fullWidth={true} disabled={Errors.nameError || Errors.emailError || Errors.passwordError || Errors.confpasswordError || Errors.dateError} />
            </Container>
            );
    

}

export default Regester;