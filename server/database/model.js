import mongoose from "mongoose";
import User from './userModel.js';

const TodoSchema=new mongoose.Schema({
    data:{
        type:String,
        required: true
    },
    done:{
        type:Boolean,
        default:false
    },
    
    createdAt:{
        type:Date,
        default:Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
      },
})
const todo=mongoose.model('todo', TodoSchema);
export default todo;