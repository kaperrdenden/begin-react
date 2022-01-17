import React, { useRef, useState, useMemo, useCallback,useReducer } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
function App() {

  const users = [
    {
        id:1,
        username:'kim',
        email:'iojfoasdikf@laksdasd.com',
    },
    {
        id:2,
        username:'ddm',
        email:'DSDWdadikf@laksdasd.com',
    },
    {
        id:3,
        username:'dasdas',
        email:'zzssdikf@laksdasd.com',
    },
]
  return (
    <>
     <InputSample/>
     <UserList users={users}/>
    </>
  );
}

export default App;