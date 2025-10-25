import type { todoType } from "@/interface/todo.interface";
import React, { createContext, useState, type SetStateAction } from "react";


export interface TodoContextType {
    todo : todoType[] | null,
    setTodo : React.Dispatch<SetStateAction<todoType[] | null>>,
    editingTodo : todoType | null,
    setEditingTodo : React.Dispatch<SetStateAction<todoType | null>>
}


export const TodoContext = createContext<TodoContextType | null>(null)


export const TodoContextProvider = ({children}:{children : React.ReactNode})=>{
    const [todo,setTodo] = useState<todoType[] | null>(null);
    const [editingTodo,setEditingTodo] = useState<todoType| null>(null)

    const TodoObj : TodoContextType= {todo,setTodo,editingTodo,setEditingTodo}

    return (
        <TodoContext.Provider value={TodoObj}>
            {children}
        </TodoContext.Provider>
    )
}