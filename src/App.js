import React, { useRef, useState, useMemo, useCallback,useReducer } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  })

  const {username,email} = inputs;

  const onChange = (e)=>{
    const {value, name} = e.target;

    setInputs(
     { ...inputs,
      [name]:value,}
    )
  }

  const [users, setUsers] = useState([
    {
        id:1,
        username:'kim',
        email:'iojfoasdikf@laksdasd.com',
        active:true,
    },
    {
        id:2,
        username:'ddm',
        email:'DSDWdadikf@laksdasd.com',
        active:false,
    },
    {
        id:3,
        username:'dasdas',
        email:'zzssdikf@laksdasd.com',
        active:false,
    },
]) 
  const nextId = useRef(4);
  
  const onCreate = (e) => {
    const user = {
      id:nextId.current,
      username,
      email,
    }
  //  setUsers([...users, user])
  setUsers(users.concat(user));
    setInputs({
      username:'',
      email:''
    })
    nextId.current += 1;
  }
  const onRemove = (id)=>{
    setUsers(users.filter((user,i)=>{return user.id !== id }))
  }
  const onToggle = (id)=>{
    // 액티브 버튼을 누르면 이 함수로 인해서 users 를 한번 싹 돈다
    setUsers(
      users.map(user=>
        user.id === id ? {
          ...user,
          active : !user.active,
        }
        : user
        )
    )
  }
  return (
    <>

     {/* <InputSample/> */}
     <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
     <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;