 const registerMiddle = (req,res,next)=>{
    let {password} = req.body
   password =  password.split("")
    
   if(password.length<8){
    res.json({msg:"Password must be at least 8 characters in length"})
   }

  let flag = false
  password.map((e)=>{
      if(e*0 !=0){
         if(e == e.toUpperCase()){
            flag = true
         }
      }
  })
 
    if(flag==false){
        res.json({msg:" Password must be atleast one uppercase character"})
    }
    else if(password.includes("!") == false && password.includes("@") == false && password.includes("#") == false && password.includes("%") == false && password.includes("$") == false){
        res.json({msg:"Password must be atleast one special character (!,@,#,$,%)"})
    }
    next()
 }

 module.exports = registerMiddle