import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ToDoList extends Component {
    static contextType = ThemeContext;

    state = {}
    render() {
        const { isLightTheme, light, dark } = this.context;
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
}

export default ToDoList;