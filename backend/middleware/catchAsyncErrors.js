module.exports = forAsync=>(req,res,next)=>{
        Promise.resolve(forAsync(req,res,next)).catch((e)=>{
                console.log(e);
                next();
        });
}
