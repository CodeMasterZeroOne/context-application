import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
// //use of component example
// class ThemeToggle extends Component {
//     static contextType = ThemeContext;
//     render() { 
//         const { changeTheme } = this.context;
//         return (
//             <button onClick={changeTheme}>Change Theme</button>
//         );
//     }
// }

//use of context example
const ThemeToggle = () => {
    const { changeTheme } = useContext(ThemeContext);
    return (
        <button onClick={changeTheme}>Change Theme</button>
    );
}

export default ThemeToggle;