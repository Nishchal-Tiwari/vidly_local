const mongo=require('mongoose')
module.exports=mongo.model( "videos",  new mongo.Schema({
    path:String,
    thumbnail_path:String,
    views:Number,
    uploaded_by:{type:String},
    name:{type:String},
    category:{type:String},
    genere:{type:String},
    upload_date:{type:Date,default:Date.now},
    likes:{type:Number ,default:0,  },
    comments:String,
    vid_id:String
    
}))





