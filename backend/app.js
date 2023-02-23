const express = require("express");
const errorMiddleware=require('./middleware/error');
const cookieParser = require("cookie-parser"); 
const app=express();
const cors = require("cors");

app.use(cors())
app.use(express.json());
app.use(cookieParser());

// Route imports
const userRoute=require("./routes/userRoutes");
const clientRoute=require("./routes/clientRoutes");

app.use('/api/v1',userRoute);
app.use('/api/v1',clientRoute);

// Midddleware for error
app.use(errorMiddleware);

module.exports=app;