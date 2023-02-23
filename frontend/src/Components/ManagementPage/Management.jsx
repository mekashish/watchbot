import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import Input from "@mui/material/Input";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import Button from "@mui/material/Button";
import Loader from "../layout/Loader/loader";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useAlert} from "react-alert";
axios.defaults.baseURL = "http://localhost:8000/";

function cleanup() {
    const height = 416;
    const width = 416;
    const input = document.getElementById("input");
    let ctxi = input.getContext('2d');
    ctxi.fillStyle = "white";
    ctxi.fillRect(0, 0, width, height);
    const output = document.getElementById("output");
    let ctxo = output.getContext('2d');
    ctxo.fillStyle = "white";
    ctxo.fillRect(0, 0, width, height);
}


function WebcamDetection() {
    let streamHandler = null;
    const width = 416;
    const height = 416;
    let streamTracks = null;
    useEffect(() => {
        const video = document.createElement("video");
        const input = document.getElementById("input");
        let ctxi = input.getContext('2d');
        window.navigator.mediaDevices.getUserMedia({ audio: false, video: { height: 416, width: 416 } }).then((stream) => {
            video.srcObject = stream;
            streamTracks = stream;
            video.play();
            streamHandler = setInterval(() => {
                ctxi.drawImage(video, 0, 0, width, height);
            }, 40)
        })
        return (() => {
            streamTracks.getTracks()[0].stop();
            clearInterval(streamHandler);
            cleanup();
        })
    }, [])
    return (
        <>
        </>
    )
}
function CanvasSupport(props) {
    const [input, setInput] = useState(null);
    const [output, setOutput] = useState(null);
    const [ctxi, setCtxi] = useState(null);
    const [ctxo, setCtxo] = useState(null);
    const alert = useAlert();
    const width = 416;
    const height = 416;
    const colors = {
        "Without helmet": "red",
        "With helmet": "green"
    }
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const toggleLoading = () => {
        setOpen(!open);
    };
    function predictImage(input, output, ctxi, ctxo) {
        if (input != null && output != null) {
            let data = ctxi.getImageData(0, 0, 416, 416);
            // setOpen(true);
            axios.post("http://localhost:8000/process", {
                "data": Array.from(data.data).filter((elem, idx) => {
                    return idx % 4 != 3
                })
            }).then((res) => {

                ctxo.clearRect(0, 0, width, height);
                ctxo.beginPath(0, 0, width, height);
                ctxo.putImageData(data, 0, 0);
                if(res.data && res.data.data && res.data.data.licences){
                    props.updateLicences(res.data.data.licences);
                }
                if (res.status && res.data && res.data.data && res.data.data.detection) {
                    for (let detection of res.data.data.detection) {
                        let x = detection[0][0];
                        let y = detection[0][1];
                        let w = detection[0][2];
                        let h = detection[0][3];
                        ctxo.strokeStyle = colors[detection[1]];
                        ctxo.lineWidth = "2";
                        ctxo.rect(x, y, w, h);
                        ctxo.stroke();
                    }
                }
            }).catch((e) => {
                alert.error(e.message);
            }).finally(() => {
                // setOpen(false);
            })
        }
    }

    useEffect(() => {
        const ip = document.getElementById("input");
        const op = document.getElementById("output");
        const ctxip = ip.getContext('2d');
        const ctxop = op.getContext('2d');
        ctxip.fillStyle = "black";
        ctxip.fillRect(0, 0, width, height);
        ctxop.fillStyle = "black";
        ctxop.fillRect(0, 0, width, height);
        setInput(ip);
        setOutput(op);
        setCtxi(ctxip);
        setCtxo(ctxop);
        setTimeout(() => {
            setInterval(() => {
                predictImage(ip, op, ctxip, ctxop);
            }, 5000);
        }, 500)
    }, [])
    return (
        <Grid container justifyContent="center">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                {/* <CircularProgress color="primary" /> */}
                <Loader />
            </Backdrop>
            <Grid item xs={12} md={6} justifyContent="center" style={{ 'textAlign': "center" }}>
                <canvas id="input" width="416" height="416" />
            </Grid>
            <Grid item xs={12} md={6} justifyContent="center" style={{ 'textAlign': "center" }}>
                <canvas id="output" width="416" height="416" />
            </Grid>
            <Grid item md={12} style={{ "marginTop": "20px", 'textAlign': "center", "marginBottom": "50px" }} justifyContent="center">
            </Grid>
        </Grid>
    )
}
export default function Detection() {
    const [open, setOpen] = useState(false);
    const [licences, setLicences] = useState([]);

    const updateLicences = (lic) => {
        setLicences([...lic]);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const toggleLoading = () => {
        setOpen(!open);
    };
    const availableModes = ["Image", "Webcam", "Video"];
    const [mode, setMode] = useState(availableModes[0]);
    const handleChange = (e) => {
        setMode((e.target.value))
    }
    useEffect(() => {
        toggleLoading();
        axios.get("/").then((res) => {

        }).catch((err) => {
            alert("Cannot connect with server");
        }).finally(() => {
            setOpen(false);
        })
    }, [])
    return (
        <div id="management">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                {/* <CircularProgress color="primary" /> */}
                <Loader />
            </Backdrop>
            <div>

                <Grid container justifyContent="center" style={{ "marginTop": "50px" }}>
                    <Grid item rowSpacing={2} xs={12}>
                        <WebcamDetection />
                    </Grid>
                    <Grid item rowSpacing={12} xs={12} style={{ "marginTop": "50px" }}>
                        <CanvasSupport updateLicences={updateLicences} />
                    </Grid>
                    <Grid item rowSpacing={12} xs={12} style={{ "marginTop": "50px","maxWidth":"600px","margin":"auto" }}>
                        <List>
                            {
                            (  
                                licences.map((elem,idx)=>{
                                    return (
                                        <ListItem disablePadding key={elem}>
                                            <ListItemButton>
                                                <ListItemText primary={`${idx+1} vehicle Entered - ${elem}`} />
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                }) 
                            )
                            }
                        </List>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}