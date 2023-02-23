import React, { Component } from 'react'

import Grid from "@mui/material/Grid"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import "./Management.css";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));




export default class management extends Component {
  render() {


    return (
        <>
        
        <div className="box">

        <div>
        <h1>Management</h1></div>

        <div  container>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 12, sm: 2, md: 3 }}>
            <Grid item md={6} xs={12}>
                <Item className="item">
                   
                </Item>
            </Grid>
            <Grid item md={6} xs={12}>
                <Item container className="item">
                    <div>

                    </div>
                </Item>
            </Grid>
            <Grid item md={6} xs={12}>
                <Item className="item">3</Item>
            </Grid>
            <Grid item md={6} xs={12}>
                <Item className="item">4</Item>
            </Grid>
        </Grid>
            
      
        </div>
        </div>
        </>
    )
  }
}
