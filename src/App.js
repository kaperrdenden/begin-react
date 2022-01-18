import React, { useRef, useState, useMemo, useCallback,useReducer } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수 세는 중');
  return users.filter((e,i)=>{return e.active === true}).length;
}

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
  const count = useMemo(()=>{return countActiveUsers(users)},[users]) ;
  // users내용이 바뀌지 않았다면 이전의 값을 계속 사용함.
  return (
    <>

     {/* <InputSample/> */}
     <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
     <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
     <div>활성사용자 수 :  {count}</div>
    </>
  );
}

export default App;