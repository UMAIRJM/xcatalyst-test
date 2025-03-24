
const MyTasks = require('../models/tasks');







exports.findMyTasks =async (req,res) =>{
    try{
        const query = {
            owner:userId 
        }
        const records =await MyTasks.find(query);
        if(!records){
            return res.status(404).json({message:"records not found",status:404,success:false,data:{}})
        }
        return res.status(200).json({message:"records  found",status:200,success:true,data:{}})

    }catch(e){
        return res.status(400).json({message:"error occured",status:400,success:false,data:{}})
        
    }
}


exports.findMyTasks =async (req,res) =>{
    try{
        //api be like /task/:id
        const id = req.params.id;
        
        const records =await MyTasks.findByIdAndDelete(id);
        if(!records){
            return res.status(404).json({message:"records not found",status:404,success:false,data:{}})
        }
        return res.status(200).json({message:"record deleted successfully",status:200,success:true,data:{}})

    }catch(e){
        return res.status(400).json({message:"Error Occured while deleting the record",status:400,success:false,data:{}})
        
    }
}



exports.findMyTasks =async (req,res) =>{
    try{

        const {title,status} = req.body;
        const limit = req.query.limit;
        // const page = req.
        const query = {
            owner:userId 
        }
        const records =await MyTasks.find(query);
        if(!records){
            return res.status(404).json({message:"records not found",status:404,success:false,data:{}})
        }
        return res.status(200).json({message:"records  found",status:200,success:true,data:{}})

    }catch(e){
        return res.status(400).json({message:"error occured",status:400,success:false,data:{}})
        
    }
}

