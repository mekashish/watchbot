import React, { Fragment, useState } from "react";
import "./Registration.css";
import axios from "axios";
function Registration() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const registerDetails = { username, password, confirm_password};
        const formUrl = "http://localhost:4000/api/v1/user/signup";
        axios.post(formUrl, registerDetails).then((res) => {
            alert("You have signed up successfully");
        }).catch((err) => {
            alert(err.message);
        })
    }

    return (
        <Fragment>
            <div id="body">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                    crossOrigin="anonymous"></link>
                <h1 className="section-header">Premise Signup</h1>

                <div className="contact-wrapper">

                    <div className="left-Text-canatinery">

                    </div>


                    <div className="direct-contact-container">

                        <form id="contact-form" class="form-horizontal" role="form" onSubmit={handleSubmit}>
                            <div class="form-group">
                                <div class="col-sm-20">
                                    <label class="label">Enter Username</label>
                                    <input type="text" class="form-control" id="name" placeholder="Username" name="username" value={username}
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

                            <div class="form-group">
                                <div class="col-sm-20">
                                    <label class="label">Confirm Password</label>
                                    <input type="password" class="form-control" id="confirm_password" placeholder="Password" name="confirm_password" value={confirm_password} 
                                    onChange={(e) => setConfirmPassword(e.target.value)} required />
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

export default Registration;
