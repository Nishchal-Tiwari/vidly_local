const express=require('express');
const Router=express.Router();
const vid=require('./video_schema')

Router.route('/').get(async (req,res)=>
{
    const data=await vid.find();
    res.setHeader('Content-Type', 'application/json');
    res.send(
        {data}
    )
    // res.setHeader('Content-Type', 'text/html');
    // res.send(
    //     '<video src="http://10.61.74.57:3000/stream?v='+data[0].path+'" controls mute width="500px" height="300px"></video>'
    // )

    
})
module.exports=Router;