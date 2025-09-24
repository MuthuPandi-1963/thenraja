import express from 'express'
import DbConnect from './dbConnect.js';
import {config} from 'dotenv'
import todoModel from './todoList.js';

const app = express()
config()

app.use(express.json())

app.get("/",(req,res)=>{
    console.log(req.originalUrl,req.host);
    // return res.send("hello world")
    return res.json({
        message : "Api running successfully",
        data : [
            {"name" : "pandi"},
            {"name" : "pandi"},
            {"name" : "pandi"},
            {"name" : "pandi"},
        ]
    })
    
})
app.get("/todo",async (req,res)=>{
    try {
        const todoList =await todoModel.find()
        console.log(todoList);
        
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
})

app.post("/todo",async (req,res)=>{
    try {
        console.log(req.body);
        
    const {name} = req.body
    if(!name || name.length < 20 ){
        return res.status(404).json({
                message : "name is empty",
                success : false
            })
    }
    const newTodo = await todoModel.create({
        name : name,
        des : req.body?.des || "Nothing"
    })   
    return res.status(200).json({
            message : "todo added successfully",
            data : newTodo
        })
     
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            message : `Error occurred , please try again later ${error.message}`,
        })
    }
})

app.listen(3000,async()=>{
    await DbConnect()
    console.log("server running successfully");
})