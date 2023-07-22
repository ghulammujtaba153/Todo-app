import  React,{ useEffect } from 'react'
import { deleteTodo, getAllTodos } from '../redux/actions/index.js';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo.jsx';
import Tabs from './Tabs.jsx';


const Todos = () => {
    const dispatch=useDispatch();

    const todos=useSelector(state => state.todos);
    const {_id}=useSelector(state => state.auth.user);

    const currentTab=useSelector(state=> state.tab)

    useEffect(()=>{
        dispatch(getAllTodos(_id))
    },[])

    const getTodos=()=>{
      if (currentTab==='ALL_TODOS'){
        return todos;
      }else if(currentTab==='ACTIVE_TODOS'){
        return todos.filter(todo=>
          !todo.done
        )
      }else if(currentTab==='COMPLETED_TODOS'){
        return todos.filter(todo=> todo.done)
      }
    }


    
    const removeAllDoneTodos=()=>{
      todos.forEach(element => {
        if(element.done){
          dispatch(deleteTodo(element._id))
        }
      });
    }


  return (
    <article>
      <div >
      <Tabs currentTab={currentTab}/>
      {
        todos.some(todo=>todo.done)?(
          <button className='tab-button clear' onClick={removeAllDoneTodos}>Remove Done TODOS</button> 
        ): null
      }
      </div>
      
      <ul>
      {getTodos().map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
      </ul>
    </article>
  )
}

export default Todos;