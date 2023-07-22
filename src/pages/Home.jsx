import React from 'react';
import Headers from '../components/Headers';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos.jsx';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Headers/>
        <TodoForm/>
        <Todos/>
    </div>
  )
}

export default Home