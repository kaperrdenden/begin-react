import React, { useRef, useState, useMemo, useCallback,useReducer } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';


function App() {
  const users = [
    {
        id:1,
        username: 'Dong',
        email: 'weather2sogood@gmail.com',
    },
    {
        id:2,
        username: 'hee',
        email: 'ssmail.com',
    },
    {
        id:3,
        username: 'kang',
        email: 'wdsa2ssssmail.com',
    }
]

  return (
    <>

    </>
  );
}

export default App;