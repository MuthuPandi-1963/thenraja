import {Router} from 'express'
import { getAllTodos } from '../controllers/getTodo.controller.js'
import { getById } from '../controllers/getById.controllers.js'
import { updateTodo } from '../controllers/updateTodo.controllers.js'
import { deleteTodo } from '../controllers/delete.controllers.js'
import { createTodo } from '../controllers/createTodo.controllers.js'


export const todoRoutes = Router()

todoRoutes.get("/",getAllTodos)
todoRoutes.get("/:id",getById)
todoRoutes.put("/:id",updateTodo)
todoRoutes.delete("/:id",deleteTodo)
todoRoutes.post("/",createTodo)