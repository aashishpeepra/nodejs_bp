const User = require("../Model/user.modle");
const bcrypt = require("bcrypt");
const httpError = require("../Model/http-error");

// User

exports.LOGIN = (req,res,next) =>{
    res.send("I'm login");
}

exports.SIGNUP = async (req,res,next)=>{
    // POST , {name,email,password}
    const data = req.body;
    //{email:,pass}
    // post DATA - >data
    console.log(req.body)
    let checkUser = false;
    try{
        checkUser = await User.findOne({email:data.email});
    }catch(err){
        console.error(err)
        return next(new httpError("Something went wrong mai hu",500))
    }
    if(checkUser!==null)
    {
        // we found user
        // wait a min, a min, aaaaa min, aaaaaaaaaa min
        return next(new httpError("user exits",500))
    }
    // reaches 
    // checkUser = false
    let haskPassword = "";
    try{
        console.log(data.password)
        haskPassword = await bcrypt.hash(data["password"],+process.env.SALT);
    }
    catch(err){
        console.log(err)
        return next(new httpError("Something went wrong here",500))
    }
    data['password'] = haskPassword
    checkUser = new User(data);
    try{
        await checkUser.save();
    }
    catch{
        return next(new httpError("Something went wrong",500))
    }
    // reach, s
    // delete data.password;
    res.status(202).json({
        email:data.email,
        name:data.name,
        id:checkUser.id
    });
}