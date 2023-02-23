const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const Client =require("../models/ClientFormModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require('../utils/sendEmail');



exports.getclientDetails = catchAsyncErrors(async(req,res,next)=>{
    const client =await Client.findById(req.params.id);
    
    res.status(200).json({
        success:true,
        client
    });
});

// -------------- Register User (Client) ---------------

exports.registerClient=catchAsyncErrors(async(req,res,next)=>{
    const {name,email,location,openingTime,closingTime,TypeOfVehicles,LicensePlateNumber}=req.body;
    const client=await Client.create({
        name,
        email,
        location,
        openingTime,
        closingTime,
        TypeOfVehicles,
        LicensePlateNumber
    });
    const message = `You have been successfully registered.`;

    try {
        await sendEmail({
            email: client.Email,
            subject: `WatchBot`,
            message,
        });
        res.status(200).json({
            success: true,
            message: `Email sent to ${client.Email} successfully.`,
        });

    } catch (error) {
        client.resetPasswordToken = undefined;
        client.resetPasswordExpire = undefined;
    }
    sendToken(client,201,res);
});
