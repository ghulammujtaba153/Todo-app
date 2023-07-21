import todo from "../database/model.js"




export const addTodo=async(req, res)=>{
    try {
        const newTodo=await todo.create({
            data :req.body.data,
            user: req.body.user,
            createdAt:Date.now()
        })
        await newTodo.save();
        return res.status(200).json(newTodo)
    } catch (error) {
        return res.status(500).json(error)
    }

}

export const getAllTodo=async(req, res)=>{
    
    try {
        
        const todos=await todo.find({ user: req.params._id }).sort({'createdAt': -1})
        
        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const toggleTodoDone=async(req, res)=>{
    try {
        
        const  todoRef=await todo.findById(req.params.id);
        
        const todos=await todo.findOneAndUpdate(
            {_id: req.params.id},
            {
                done:!todoRef.done}    
        )
        
        
        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json("this is axios error"+error)
    }
}



export const updateTodo=async(req, res)=>{
    try { 
        await todo.findOneAndUpdate(
            {_id: req.params.id},
            {
                data:req.body.data}    
        )
        
        const todos=await todo.findById(req.params.id);

        
        
        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deleteT0do=async(req, res)=>{
    try {
        
        const todos=await todo.findByIdAndDelete(req.params.id);
        

        
        console.log(todos)
        
        return res.status(200).json(todos);
        
    } catch (error) {
        console.log("error")
        return res.status(500).json(error)
        
    }
}

