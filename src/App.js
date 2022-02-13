import React, { useRef, useState, useMemo, useCallback,useReducer } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';


function App() {
  const [inputs, setInputs] = useState({ // setInputs를 통해서 input창을 다룬다
    username:'',
    email:'',
  })
  const {username, email} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }
  const [users, setUsers] = useState([
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
]);
  
  
  const nextId = useRef(4);
  

  const onCreate = () => {
    const user = {
      id:nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username:'',
      email:'',
    })
    nextId.current += 1;
  }
  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}/>
    </>
  );
}

export default App;