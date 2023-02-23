import React, { Fragment, useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./client.css"
function Client() {
    const [name, setName] = useState("");
    const [license, setLicence] = useState("");
    const [arrival_time, setArrival_time] = useState("");
    const [exit_time, setExit_time] = useState("");
    const [destination, setDestination] = useState("");
    const [email,setEmail] = useState("");
    const [typeofvehicle, setTypeofvehicle] = useState("");

    const navigate = useNavigate();
    const alert = useAlert();
    const handleSubmit = (e) => {
        e.preventDefault();
        const userDetails = { name, license, arrival_time, exit_time, destination, email, typeofvehicle};
        const formUrl = "http://localhost:4000/api/v1/register/client";
        axios.post(formUrl, userDetails).then((res) => {
            alert.success("You have registered successfully");
            navigate("/");
        }).catch((err) => {
            alert.error(err.message);
        })
    }
    return (
        <Fragment>
            <div id="body">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                    crossorigin="anonymous"></link>
                <h1 className="section-header">Parking Booking</h1>

                <div className="contact-wrapper">

                    <div className="left-Text-canatiner">

                    </div>


                    <div className="direct-contact-container">

                        <form id="contact-form" class="form-horizontal" role="form" onSubmit={handleSubmit}>
                            <div class="form-group">
                                <div class="col-sm-20">
                                    <input type="text" class="form-control" id="name" placeholder="Name" name="name" value={name}
                                        onChange={(e) => setName(e.target.value)} required />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-20">
                                    <input type="text" class="form-control" id="License_Plate_No" placeholder="License Plate No" name="License_Plate_No" value={license}
                                        onChange={(e) => setLicence(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-20">

                                    <input type="email" className="form-control" id="email" placeholder="Email" name="Email address" value={email}
                                        onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-20">
                                    <label class = "label">Enter Arrival Time</label>
                                    <input type="datetime-local" class="form-control" id="arrival_time" placeholder="Arrival Time" name="arrival_time" value={arrival_time}
                                        onChange={(e) => setArrival_time(e.target.value)} required />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-20">
                                    <label class = "label" >Enter Expected Departure Time</label>
                                    <input type="datetime-local" class="form-control" id="expected_exit_time" placeholder="Expected Exit Time" name="exit_time" value={exit_time}
                                        onChange={(e) => setExit_time(e.target.value)} required />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-20">
                                    
                                    <input type="text" class="form-control" id="destination" placeholder="Destination" name="destination" value={destination}
                                        onChange={(e) => setDestination(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-20">
                                    <input list="vehicle" className="form-control" id="typeofvehicle" placeholder="Type of Vehicle" name="type of vehicle" value={typeofvehicle}
                                        onChange={(e) => setTypeofvehicle(e.target.value)} required />
                                    <datalist id="vehicle">
                                        <option value="Bicycle" />
                                        <option value="Car" />
                                        <option value="Motorbike" />
                                        <option value="Bus" />
                                        <option value="Truck" />
                                    </datalist>
                                </div>
                            </div>

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

export default Client;
