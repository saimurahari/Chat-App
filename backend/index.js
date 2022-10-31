const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const app  = express();
app.use(express.json());
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://saichatapp:P7R1qBHbFk25Y9oF@cluster0.gx7gcgv.mongodb.net/authDB?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});()=>{
    console.log("connected to DB");
}

//user schema
const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    password:String
})

const User = new mongoose.model('User',userSchema)

//routes
app.post("/login",(req,res)=>{
    const {email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});
app.post("/Register",(req,res)=>{
    console.log(req.body)
    bcrypt.hash(req.body.password,10)
    const {name,email,password} = req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already exist"})
        }
        else{
            const user = new User({name,email,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message:"successfull"})
                }
            })
        }
    })
})
app.listen(4000,()=>{
    console.log("started at port number 4000");
})