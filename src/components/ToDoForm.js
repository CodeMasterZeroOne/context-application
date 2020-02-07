import React, { useContext, useState } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';
import { ThemeContext } from '../contexts/ThemeContext'

const ToDoForm = () => {
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const { addToDo } = useContext(ToDoContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const theme = isLightTheme ? light : dark;

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(title, content);
        setTitle('');
        setContent('');
    }
    return (
        <form onSubmit={handleSubmit} style={{ background: theme.bg, color: theme.syntax }}>
            <label>New task</label>
            <input required type="text" placeholder="Task title" value={title} style={{ background: theme.ui, color: theme.syntax }} onChange={(e) => setTitle(e.target.value)} />
            <input required type="text" placeholder="Task content" value={content} style={{ background: theme.ui, color: theme.syntax }} onChange={(e) => setContent(e.target.value)} />
            <input type="submit" value="Add task" />
        </form>
    );
}

export default ToDoForm;