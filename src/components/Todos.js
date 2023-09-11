import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


const Todos = () => {

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch();
    


  return (
    <div>
          {todos.length > 0 ? todos.map((todo) => {
              return <>
                  <div className='p-4 bg-fuchsia-600 m-4 rounded-sm flex justify-between '>
                      <span>{todo.text}</span>
                  <button
                    className=' bg-red-600 p-1 rounded-md  '
                    onClick={() => { dispatch(removeTodo(todo.id)) }}>delete</button>
              </div>
              </>
          })
              : <h3 className='text-center'>No todos to display...</h3>}
    </div>
  )
}

export default Todos
