import React from 'react'
import * as actionTypes from '../actions/type'


const todosReducer = (state=[], action) => {
  switch(action.type){
    case actionTypes.ADDNEWTODO:
        return [action.payload, ...state]
    case actionTypes.GET_All_Todo:
      return action.payload

    case actionTypes.TOGGLE_TODO:
      return state.map(todo=>(
        todo._id===action.payload._id ? {...todo, done:!todo.done}:todo
      ))
    case actionTypes.UPDATE_TODO:
      return state.map(todo=>(
        todo._id===action.payload._id ? {...todo, data:action.payload.data}:todo
        ))

    case actionTypes.DELETE_TODO:
      return state.filter(todo=>(
        todo._id!==action.payload._id
      ))
    default:
        return state;
  }
}

export default todosReducer