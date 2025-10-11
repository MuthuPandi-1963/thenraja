import todoModel from "../models/todo.models.js";


export const getById = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const findTodo  = await todoModel.find({
            id
        });
        console.log(findTodo);
        
        if(findTodo.length <=0){
            return res.status(404).json({
                message : "todo not found"
            })
        }
        return res.status(200).json({
            message : "todo  fetched successfully",
            data : findTodo
        })
        
    } catch (error) {
        return res.status(500).json({
            message : `Error occurred , please try again later ${error.message}`,
        })
    }
    
}
