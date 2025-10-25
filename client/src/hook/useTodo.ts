import { TODOAPI } from "@/api/todo.api";
import { toast } from "react-toastify";

export const getTodo = async (setTodo: any) => {
    const res = await TODOAPI.getAllTodos()
    console.log(res.data);
    const { message, data } = res.data
    toast.success(message)
    setTodo(data)
}