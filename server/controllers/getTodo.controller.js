import todoModel from "../models/todo.models.js";

export const getAllTodos = async (req,res)=>{
    try {
        const todoList =await todoModel.find()        
        if(!(todoList.length > 0)){
            return res.status(404).json({
                message : "todo list is empty",
                success : false
            })
        }
        return res.status(200).json({
            message : "todo list fetched successfully",
            count : todoList.length,
            data : todoList
        })
    } catch (error) {
        return res.status(500).json({
            message : `Error occurred , please try again later ${error.message}`,
        })
    }
}


