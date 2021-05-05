const mongoose = require('mongoose')
const User = mongoose.model("User")
const Product = mongoose.model("Product")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const{JWT_SECRET} = require('../keys')




function formController(){
    return{
        signup(req,res){
            const{username,email,password}=req.body
            console.log('req.body',req.body);
            if(!email || !password || !username){
              return res.status(422).json({error:"please add all fields"})
            }else{
                User.findOne({username:username}).then((savedUser)=>{
                    if(savedUser){
                      return res.json({error:'user already existing in that username'})
                    }else{
                        bcrypt.hash(password,12).then((hashedPassword)=>{
                          const user = new User({
                              email,
                              password:hashedPassword,
                              username,
                              
                          })
                          user.save().then((user)=>{
                              console.log('user',user);
                              return res.json({message:'New user created successfully'})
                          }).catch((err)=>{
                              console.log('err 1',err);
                          })
                        })
                       
                    }
                   
                }).catch((err)=>{
                  console.log('err 2',err);
              
                })
            }

        },
        signIn(req,res){
            const{username,password} = req.body
            if(!username || !password){
               return res.json({error:'please fill all the fields'})
            }else{
                User.findOne({username:username}).then((savedUser)=>{
                    if(!savedUser){
                       return res.json({error:'something went wrong'})
                    }else{
                        bcrypt.compare(password,savedUser.password).then((doMatch)=>{
                            if(doMatch){
                                
                                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                                const{_id,username,email}=savedUser
                                return res.json({token,user:{_id,username,email}})
                            }else{
                                return  res.json({error:"you have entered an incorrect password"})
                            }
                        }).catch((err)=>{
                            console.log("err at the signin ",err)
                        })
                    }
                })
            }
        }




    }

}
module.exports=formController