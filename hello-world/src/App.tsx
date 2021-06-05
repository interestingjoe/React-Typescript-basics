import React from 'react';
import './App.css';
import TextField from './components/TextField'

const App: React.FC = () => {
  return (
    <>
      <TextField text='hello' obj2={{firstName: 'John', lastName: 'Smith'}}/>
    </>
  );
}

export default App;
