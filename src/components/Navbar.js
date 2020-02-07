import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
// //using component example
// class Navbar extends Component {
//     render() {
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isAuthenticated, toggleAuth } = authContext;
//                     const { isLightTheme, light, dark } = themeContext;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                         <nav style={{ background: theme.ui, color: theme.syntax }}>
//                             <h1>To Do List</h1>
//                                 <div onClick={toggleAuth}>
//                                     { isAuthenticated ? 'Logged in' : 'Logged out' }
//                                 </div>
//                             <ul>
//                                 <li>At Home</li>
//                                 <li>At Work</li>
//                                 <li>At School</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}
//                 </ThemeContext.Consumer>
//             )}
//             </AuthContext.Consumer>
//         );
//     }
// }

// //using context example
const Navbar = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>To Do List</h1>
            <div onClick={toggleAuth}>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
            </div>
        <ul>
            <li>At Home</li>
            <li>At Work</li>
            <li>At School</li>
        </ul>
    </nav>
    );
}

export default Navbar;