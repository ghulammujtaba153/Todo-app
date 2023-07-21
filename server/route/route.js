import express  from "express";
import { addTodo, deleteT0do, getAllTodo,toggleTodoDone, updateTodo } from "../controller/todo-controller.js";
import {registerUser, loginUser} from '../controller/authController.js'


const route=express.Router();





route.post('/auth/register', registerUser);

route.post('/auth/login', loginUser);

route.post('/todos', addTodo)
route.get('/todos/:_id', getAllTodo)
route.get('/todo/:id', toggleTodoDone)
route.put('/todos/:id', updateTodo)
route.delete('/todos/:id', deleteT0do)
export default route;