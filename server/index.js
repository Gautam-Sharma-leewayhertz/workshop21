const express=require('express');
const app=express();
const cors=require('cors')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const User=require('./model/User')
const dotenv=require('dotenv')
const verify=require('./model/verifyToken')
app.use(express.json())
app.use(cors());

dotenv.config();
mongoose.connect(process.env.DBURL);

mongoose.connection.on('connected',()=>{
    console.log('connected');
})


app.post('/api/register',async (req,res)=>{
   
  
    try{
        const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(req.body.password,salt);
    
          const user=await User.create({
              name:req.body.name,
              email:req.body.email,
              password:hashpassword,
          })
          
          const saveduser=await user.save();
          console.log(saveduser);
          res.json({status:'ok' ,user:saveduser})
    }catch(err){
        console.log(err);
        res.json({status:'error',error:'duplicate email'})
    }
});

app.post('/api/login',async (req,res)=>{
    try{
        const user=await User.findOne({
            email:req.body.email,
        })

        if(!user) return res.status(400).send('email Not Found');
    
        const validpassword=await bcrypt.compare(req.body.password,user.password);
        if(!validpassword) return res.status(400).send('Invalid');

        const token=jwt.sign({_id:user._id},'gautam123')
    
        return res.json({status:'ok',user:token})
    }catch(err){
        console.log(err);
        res.json({status:'error',error:'duplicate email'})
    }
  })

  app.post('api/home',(req,res)=>{
      const token=req.header('auth-token');

    try{
        const decoded=jwt.verify(token,'gautam123');
        const user=decoded.user;
        console.log(user);
    }catch(e){

    }
     
  })


app.listen(1337,()=>{
    console.log('connected');
})