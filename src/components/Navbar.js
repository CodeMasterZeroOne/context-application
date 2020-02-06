import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {

    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
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
                    )
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        );
    }
}

export default Navbar;