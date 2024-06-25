
const mongoose=require("mongoose");

const messageModel=mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'senderType'
        },
        senderType: {
            type: String,
            required: true,
            enum: ['User', 'Guest']
        },
        content:{
            type:String,
            trim:true
        },
        chat:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Chat",
        },
    },{
        timestamps:true,
    }
)

const Message=mongoose.model("Message",messageModel);
module.exports=Message;



























