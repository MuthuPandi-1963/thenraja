import { TODOAPI } from "@/api/todo.api"
import { TodoContext, type TodoContextType } from "@/context/todo.context"
import type { todoType } from "@/interface/todo.interface"
import { useContext, useEffect, useState, type FormEvent } from "react"
import { toast } from "react-toastify"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Edit, Trash2Icon, X } from "lucide-react"
import { Dialog, DialogClose, DialogTitle } from "@radix-ui/react-dialog"
import { DialogContent, DialogDescription, DialogHeader } from "./ui/dialog"
import TodoForm from "./TodoForm"
import { getTodo } from "@/hook/useTodo"


export default function TodoList() {
    const {todo,setTodo} :TodoContextType | any  = useContext(TodoContext)
    const [openDialog,setOpenDialog]= useState<boolean>(false)
    const [formData,setFormData] = useState<todoType>({
        name : '',
        des :''
    })
    useEffect(()=>{
         getTodo(setTodo)
        
    },[])
    const handleSubmit  =async (e:React.FormEvent)=>{
        e.preventDefault()
        try {
            const {name} : todoType = formData
            if(!name || name.length <= 7){
                toast.error("name is required or name min 6 character")
            }
            const res = await TODOAPI.createTodo(formData)
            console.log(res.data);
            const {data,message,success} = res.data
            if(res.data.success){
                toast.success(message)
                // setTodo(prev=>[...prev])
                getTodo(setTodo)
            }else{
                toast.warn("Something occured")
            }
            
        } catch (error) {
            
        }finally{
            setOpenDialog(false)
            setFormData({
                name : '',
                des :''
            })
        }
    }
  return (
    <div className="mt-10 container max-w-7xl mx-auto">

    <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-10">Todo List</h1>
    <Button onClick={()=>setOpenDialog(true)}>
        Add Todo
    </Button>
        </div>
    <div className="grid grid-cols-5 p-4">
        {todo ? (
            todo?.map((val:todoType)=>(
                <Card  key={val.id} >
                    <CardHeader>
                    <CardTitle>{val.name}</CardTitle>
                    <CardDescription>{val.des}</CardDescription>
                    <CardAction className="flex gap-x-2">
                        <Button className="" variant={"outline"}>
                            <Edit/>
                        </Button>
                        <Button variant={"destructive"}>
                            <Trash2Icon/>
                        </Button>
                    </CardAction>
                    </CardHeader>
                        
                </Card>
            ))
        ) : (
            <p>Todo list is Empty</p>
        )}
    </div>
    <Dialog open={openDialog}>
        <DialogContent>
            <DialogClose>
                <Button onClick={()=>setOpenDialog(false)} className="float-end">
                <X/>
            </Button>
            </DialogClose>
            <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <TodoForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
        </DialogContent>
    </Dialog>
    </div>
  )
}
