


//for signup

const signUP = (req,res,next)=>{
   
    const {name,email,password,confirmPassword} = req.body;
     console.log(name,email,password,confirmPassword)
    res.status(200).json({
        success:true,
        data: {}
    })
   
}
module.exports = {
    signUP
}
