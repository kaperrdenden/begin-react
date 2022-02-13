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
        active:true,
    },

    {
        id:2,
        username: 'hee',
        email: 'ssmail.com',
        active:false,
    },
    {
        id:3,
        username: 'kang',
        email: 'wdsa2ssssmail.com',
        active:false,
    }
]);
  
  
  const nextId = useRef(4);
  

  const onCreate = () => {
    const user = {
      id:nextId.current,
      username, //onChnage에서 username이라는 state는 인풋창에 있는 값으로 실시간 매칭됨
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username:'',
      email:'',
    })
    nextId.current += 1;
  }
  const onRemove = id => {
    setUsers(users.filter((user)=>{
      return user.id !== id
    }))
  }
  const onToggle = (id) => {
   setUsers(
     users.map((user) => {
       return id === user.id ? {...user, active: !user.active} : user
     })
   )
  }
  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users}
        onRemove={onRemove}  
        onToggle={onToggle}
      />
    </>
  );
}

export default App;