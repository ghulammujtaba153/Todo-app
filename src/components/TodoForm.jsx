import React, { useState } from 'react'
import '../App.css'
import {useDispatch, useSelector} from 'react-redux'
import { addNewTodo } from '../redux/actions'


const TodoForm = () => {
    const [text, setText]=useState('')
    const dispatch=useDispatch();
    const userId = useSelector((state) => state.auth.user._id);


    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addNewTodo(text, userId))
        setText('')
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <input value={text} type="text" placeholder='Enter new todo...' onChange={(e)=>{setText(e.target.value)}}/>
        <button className='sub-btn'>Submit</button>
    </form>
  )
}

export default TodoForm