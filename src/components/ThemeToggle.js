import React, { Component }from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const { changeTheme } = this.context;
        return (
            <buttton onClick={changeTheme}>Change Theme</buttton>
        );
    }
}
 
export default ThemeToggle;