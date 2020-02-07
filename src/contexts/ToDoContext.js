import React, { createContext, useState } from 'react';

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
    const [todos, setTodos] = useState([
        { title: 'code all night', id: 1 },
        { title: 'sleep all day', id: 2 },
        { title: 'eat pizza all life', id: 3 },
        { title: 'repeat all again', id: 4 },
    ])
    return (
        <ToDoContext.Provider value={{ todos }}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export default ToDoContextProvider;