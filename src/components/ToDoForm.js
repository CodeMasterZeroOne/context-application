import React, { useContext, useState } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';
import { ThemeContext } from '../contexts/ThemeContext'

const ToDoForm = () => {
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const { dispatch } = useContext(ToDoContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const theme = isLightTheme ? light : dark;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', item:{
            title: title,
            content: content 
        }});
        setTitle('');
        setContent('');
    }
    return (
        <form onSubmit={handleSubmit} style={{ background: theme.bg, color: theme.syntax }}>
            <label>New task</label>
            <input required type="text" placeholder="Task title" value={title} maxLength="20" style={{ background: theme.ui, color: theme.syntax }} onChange={(e) => setTitle(e.target.value)} />
            <input required type="text" placeholder="Task content" value={content} maxLength="20" style={{ background: theme.ui, color: theme.syntax }} onChange={(e) => setContent(e.target.value)} />
            <input type="submit" value="Add task" />
        </form>
    );
}

export default ToDoForm;