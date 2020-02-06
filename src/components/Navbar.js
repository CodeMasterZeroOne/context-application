import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {

    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;

                return (
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1>To Do List</h1>
                        <ul>
                            <li>At Home</li>
                            <li>At Work</li>
                            <li>At School</li>
                        </ul>
                    </nav>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}

export default Navbar;