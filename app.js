const express = require('express');

const app = express();

const rateLimit = require('express-rate-limit');


app.use(express.json({ limit: '10kb' }));




//thi is applying rate limiter on one of our api from (questions
 const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too many requests from this IP, please try again after 10 minutes'
  });
  app.use('/api/', limiter);




app.get("/",(req,res)=>{
    res.status(200),json({message:"server is connexted successfully"})
})


app.listen(3000,()=>{
    console.log("server started successfully");
})