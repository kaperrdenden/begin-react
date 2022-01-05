import React from 'react';
import Hello from './Hello';


import './App.css';

function App() {
  const name = "react";
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize : 24,
    padding: 'irem'
  }
  return (
    <>
      <Hello/>
      <div style={style}>{name}</div>
   </>
  );
}

export default App;
