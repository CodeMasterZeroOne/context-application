import React from 'react';
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
//import AuthContextProvider from './contexts/AuthContext';
import ToDoContextProvider from './contexts/ToDoContext';
import ToDoForm from './components/ToDoForm';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        {/* <AuthContextProvider> */}
        <ToDoContextProvider>
          <Navbar />
          <ToDoList />
          <ToDoForm />
        </ToDoContextProvider>
        <hr/>
        <ThemeToggle />
        {/* </AuthContextProvider> */}
      </ThemeContextProvider>
    </div>
  );
}

export default App;
