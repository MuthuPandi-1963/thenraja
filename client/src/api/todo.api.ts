import type { todoType } from "@/interface/todo.interface"
import { AxiosInstance } from "@/lib/axios"


const URL : string = "todo"

export const TODOAPI = {
    getAllTodos : async ()=>await AxiosInstance.get(`/${URL}`),
    getById : async (id : string)=>await AxiosInstance.get(`/${URL}/${id}`),
    updateTodo : async (id : string,data :todoType )=>await AxiosInstance.put(`/${URL}/${id}`,data),
    createTodo : async (data :todoType )=>await AxiosInstance.post(`/${URL}`,data),
    deleteTodo : async (id : string)=>await AxiosInstance.delete(`/${URL}/${id}`),
}


