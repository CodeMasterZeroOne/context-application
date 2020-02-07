import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ToDoContext } from '../contexts/ToDoContext';

////use of component example(import Component to use it)
// class ToDoList extends Component {
//     static contextType = ThemeContext;

//     state = {}
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;

//         return (
//             <div className="todo-list" style={{ background: theme.bg, color: theme.syntax }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>Code all nighgt</li>
//                     <li style={{ background: theme.ui }}>Sleep all day</li>
//                     <li style={{ background: theme.ui }}>Repeat all again...</li>
//                 </ul>
//             </div>
//         );
//     }
// }

//use of context example
const ToDoList = () => {
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const { todos , removeToDo } = useContext(ToDoContext);
    const theme = isLightTheme ? light : dark;

    return todos.length ? (
        <div className="todo-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                {todos.map(item => {
                    return (
                        <li onClick={() => removeToDo(item.id)} key={item.id} style={{ background: theme.ui }}>{item.title}
                            <p className="itemContent">{item.content}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    ) : ( // if nothing to do on the list return this 
        <div className="todo-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>All task finished successfully. Happy days.</ul>
        </div>
    )
}

export default ToDoList;