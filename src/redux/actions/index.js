import axios from 'axios'
import { ADDNEWTODO, GET_All_Todo ,TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB} from './type';


const api_url='http://localhost:4001'

export const addNewTodo = (data, user) => async (dispatch)=>{
    try {
        const res=await axios.post(`${api_url}/todos`,{data, user});
        dispatch({type: ADDNEWTODO,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

export const getAllTodos=(_id)=>async(dispatch)=>{
    try {
        const res=await axios.get(`${api_url}/todos/${_id}`);
        console.log(res.data)
        dispatch({type: GET_All_Todo,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}


export const toggleTodo=(id)=>async(dispatch)=>{
    try {
        
        const res=await axios.get(`${api_url}/todo/${id}`);
        
        dispatch({type: TOGGLE_TODO, payload:res.data})
    } catch (error) {
        console.log(error.message)
    }
}


export const updateTodo=(id,data)=>async(dispatch)=>{
    try {
        
        const res=await axios.put(`${api_url}/todos/${id}`, {data});
        
        
        dispatch({type: UPDATE_TODO, payload:res.data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteTodo=(id)=>async(dispatch)=>{
    try {
        console.log(id)
        const res=await axios.delete(`${api_url}/todos/${id}`);
        console.log(res.data)
        
        dispatch({type: DELETE_TODO, payload:res.data})
    } catch (error) {
        console.log(error.message)
    }
}

export const toggleTab=(tab)=>async(dispatch)=>{
    dispatch({type: TOGGLE_TAB, selected: tab})
}