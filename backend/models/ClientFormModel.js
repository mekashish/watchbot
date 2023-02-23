// ------------ Client Model ------------

const mongoose=require ("mongoose");
const validator=require("validator");
const jwt=require("jsonwebtoken");

const ClientFormSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        maxlength:[30,"Cannot exceed 30 Characters"],
        minlength:[4,"Name should not exceed 4 Characters"],
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        validate:true,
        validate:[validator.isEmail,"Please Enter a valid Email"],
    },
    location:{
        type:String,
        default:"NULL",
        required:true,
    },
    openingTime: {
        type: Date,
    },
    closingTime: {
        type: Date,
    },
    TypeOfVehicles: {
        type: String,
    },
    LicensePlateNumber: {
            type: String,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});


// JWT TOKEN
ClientFormSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE,
    });
}; 


module.exports=mongoose.model("ClientForm",ClientFormSchema);

