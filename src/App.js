import React from 'react';
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import ToDoContextProvider from './contexts/ToDoContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <ToDoContextProvider>
            <ToDoList />
          </ToDoContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
