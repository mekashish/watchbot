import React, { Fragment, useState } from "react";
import "./login.css";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const registerDetails = { username, password};
        const formUrl = "http://localhost:4000/api/v1/user/login";
        axios.post(formUrl, registerDetails).then((res) => {
            alert("You have logged in successfully");
        }).catch((err) => {
            alert(err.message);
        })
    }

    return (
        <Fragment>
            <div id="body" >
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                    crossOrigin="anonymous"></link>
                <h1 class="section-header">Premise Login</h1>

                <div class="contact-wrapper">

                    <div class="left-canatinery">

                    </div>


                    <div class="direct-contact-container" style={{minHeight:"300px",display:"flex","alignItems":"center"}}>

                        <form id="contact-form" class="form-horizontal" role="form" onSubmit={handleSubmit}>
                            <div class="form-group">
                                <div class="col-sm-20">
                                    <label class="label">Enter Username</label>
                                    <input type="text" class="form-control" id="name" placeholder="Username" name="name" value={username}
                                        onChange={(e) => setUsername(e.target.value)} required />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-20">
                                    <label class="label">Enter Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Password" name="password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                            </div>


                            {/* {(registerDetails.password ===  ?  : )} */}
                            
                            <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                                <div class="alt-send-button">
                                    <i class="fa fa-paper-plane"></i>
                                </div>
                            </button>
                        </form>

                    </div>

                </div>
            </div>
        </Fragment>

    )
}

export default Login;
