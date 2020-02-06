import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

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
    const theme = isLightTheme ? light : dark;

    return (
        <div className="todo-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                <li style={{ background: theme.ui }}>Code all nighgt</li>
                <li style={{ background: theme.ui }}>Sleep all day</li>
                <li style={{ background: theme.ui }}>Repeat all again...</li>
            </ul>
        </div>
    );
}

export default ToDoList;