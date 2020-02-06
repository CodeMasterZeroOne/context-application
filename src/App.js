import React from 'react';
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <ToDoList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
