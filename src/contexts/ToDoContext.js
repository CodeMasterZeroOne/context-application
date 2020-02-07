import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1'

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
    const [todos, setTodos] = useState([
        { title: 'code all night', content: 'blablabla', id: 1 },
        { title: 'sleep all day', content: 'blablabla', id: 2 },
        { title: 'eat pizza all life', content: 'blablabla', id: 3 },
        { title: 'repeat all again', content: 'blablabla', id: 4 }
    ]);

    const addToDo = (title, content) => {
        setTodos([
            ...todos, { title: title, content: content, id: uuid() }
        ]);
    }

    const removeToDo = (id) => {
        setTodos(todos.filter(item => item.id !== id));
    }

    return (
        <ToDoContext.Provider value={{ todos, addToDo, removeToDo }}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export default ToDoContextProvider;