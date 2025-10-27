import todoModel from "../models/todo.models.js";

export const updateTodo = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!req.body){
            return res.json({
                message : "body not found"
            }).status(404)
        }

        // const findTodo  = await todoModel.findById(id);
        // if(!findTodo){
        //     return res.status(404).json({
        //         message : "todo not found"
        //     })
        // }
        // findTodo.name = req.body?.name ?? findTodo.name
        // findTodo.des = req.body?.des ?? findTodo.des
        // findTodo.updatedAt = Date.now()

        // await findTodo.save()


        const findTodo  = await todoModel.findById(id);
        if(!findTodo){
            return res.status(404).json({
                message : "todo not found"
            })
        }
        const updatedTodo = await todoModel.findByIdAndUpdate(id,{
            name : req.body?.name || findTodo.name,
            des : req.body?.des ||  findTodo.des
        })
        console.log(updatedTodo);
        
        return res.status(200).json({
            success : true,
            message : "todo  updated successfully",
            data : updatedTodo
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