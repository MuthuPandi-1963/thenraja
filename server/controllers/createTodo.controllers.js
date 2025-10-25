import todoModel from "../models/todo.models.js";

export const createTodo = async (req,res)=>{
    try {
        const {name} = req.body;

       const newTodo =  await todoModel.create({
            name : name,
            des : req.body?.des
        })
       return res.status(201).json({
        message : "data collected",
        data : newTodo,
        success : true
       })
       
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            message : `Error occurred , please try again later ${error.message}`,
        })
    }
}