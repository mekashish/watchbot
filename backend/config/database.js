const mongoose= require("mongoose");

const connectDatabase=()=>{
    console.log(`Mongodb not connected`);
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
        console.log(`Mongodb connected with server ${data.connection.host}`);
    })

    console.log(`Mongodb not connected`);
}

module.exports=connectDatabase;