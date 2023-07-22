import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toggleTodo, updateTodo, deleteTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';



const Todo = ({todo}) => {
    const dispatch=useDispatch();
    const [editing,  setEditing]=useState(false);
    const [text, setText]=useState(todo.data)

     const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(updateTodo(todo._id, text))
      setEditing(false)
     }

     

    
  return (
    <>
    <li className='task' >
        <span className='data' style={{display: editing? 'none': ''}}>
            {todo.data}
        </span>

        <form onSubmit={handleSubmit}  className='edit-form' style={{
          display: editing? 'inline': 'none'
        }}>
          <input type="text" value={text} className='edit-input' onChange={(e) => setText(e.target.value)}/>
        </form>





        {
          todo.done? <span className='icon' onClick={()=>dispatch(toggleTodo(todo._id))}>
          <FontAwesomeIcon icon={faSquareCheck}/>
          Done!
        </span>
        :

        <span>
            <span className='icon' onClick={()=>dispatch(toggleTodo(todo._id))}>
            <FontAwesomeIcon icon={faSquareCheck}/>
          
            </span>
            <span className='icon' onClick={()=>dispatch(deleteTodo(todo._id))}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
            <span className='icon' onClick={()=>{setEditing(!editing)}}>
              <FontAwesomeIcon icon={faEdit} />
            </span>
        </span>

        }
        
        
    </li>
    </>
  )
}

export default Todo