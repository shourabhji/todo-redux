import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'


const AddTodo = () => {
    const [input, setinput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setinput('')
    }



    return (
        <div className=' p-5  flex content-center justify-center w-full '>
            <form onSubmit={addTodoHandler} className=''>

                <input type="text" name="text" id="text"
                    placeholder='Enter a todo....'
                    className='p-2 text-black rounded-md
                  
                    focus: border-l-amber-300 focus:ring-amber-300
                    focus: outline-orange-600
                    '
                   
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                />

                <button type="submit" className=' ms-4 bg-amber-600  p-2 rounded-lg hover:bg-amber-700 '>Add</button>
            </form>
        </div>
    )
}

export default AddTodo
