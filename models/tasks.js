const mongoose =require('mongoose');


const structure = {
    title:{
        type:String,
        required:true,
        message:"title is required"
    },
    description:{
        type:String,
        maxLines: 3
    },
    status:{
        type:Boolean
    },
    owner:{
        name:{
            type:String,
            required:true,
            message:"owner name is required",
        },
        usserId:{
            type:mongoose.Types.ObjectId
        }
    },
    createdAt:{
        type:Number,
        default:Date.now()
    }
}



const schema = new mongoose.Schema(structure);




//below is the indexing on base of which we can improve searching of our model from thousand of records. from ( question # 01 )


schema.index({_id:1})
schema.index({title:1})
schema.index({owner:{userID:1}})

const model = mongoose.model("tasks",schema);


module.exports = model;