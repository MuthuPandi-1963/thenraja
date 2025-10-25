import todoModel from "../models/todo.models.js";

export const deleteTodo = async(req,res)=>{
    try {
        const {id} = req.params;

        const findTodo  = await todoModel.findById(id);
        if(!findTodo){
            return res.status(404).json({
                message : "todo not found"
            })
        }

        await findTodo.deleteOne()
        return res.status(200).json({
            message : "todo  deleted successfully",
        })

        // return res.status(200).json({
        //     message : "todo  updated successfully",
        //     data : findTodo
        // })
        
    } catch (error) {
        return res.status(500).json({
            message : `Error occurred , please try again later ${error.message}`,
        })
    }
    
}