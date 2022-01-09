import React, {useMemo, useRef,useCallback} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';
import Counter from './Counter';
import InputSample
 from './InputSample';
 import UserList from './UserList';
 import CreateUser from './CreateUser';
import { useState } from 'react/cjs/react.development';
import Test from './test';
function conutActiveUsers(users){
  console.log("활성사용자 수를");
  return users.filter((user)=>{
    return user.active
  }).length;
}

function App() {

  const [inputs,setInputs] = useState(
    {
      username:'',
      email:'',
    }
  )
  const {username,email} = inputs;

  const onChange = (e)=>{
    // console.log(e.target.name);
    const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const [users,setUsers] =useState( [
    {
        id:1,
        username:"velopert",
        email:'pub',
        active:true,
    },
    {
        id:2,
        username:"do",
        email:'sdasd',
        active:false,
    },
    {
        id:3,
        username:"dosd",
        email:'sdasd',
        active:false,
    }
  ])
  const nextId = useRef(4);
  const onCreate =useCallback( ()=>{
    // console.log(username);
    const user = {
      id:nextId.current,
      username:inputs.username,
      email,
    
    }

    setUsers(users.concat(user));
    // setUsers([...users, user]);
   
    setInputs({
      username:'',
      email:'',
    })
    
    
  
    nextId.current += 1;
  },[users,username,email]);
  const onRemove = useCallback( (id)=>{
    setUsers(users.filter( (e,i)=>{return id !== e.id}));
    // setUsers(users.filter(user => user.id !== id));
  },[users]
  )

  const onToggle =useCallback( (id)=>{
    // let newArray = [...users];
    
    // newArray.forEach((e,i)=>{
      // if(id===e.id){
        // e.active = !e.active
      //  setUsgiers(newArray);
      // }})
    setUsers(
    users.map(e=>{
      return e.id === id ? {...e,active: !e.active} 
      :e
    } 
      )
    
    );
  },[users]);
  const count =useMemo(()=>{
    return  conutActiveUsers(users)
  },[users])
  return (
 
    // <Wrapper>
      // <Hello name="react" color="red"
      //isSpecial={true}
      // isSpecial
      // 이렇게 넘길 props의 이름만 적으면 이는 알아서 true로 자동초기화 
      //  />
      // <Hello color="pink" />
      
      // <div style={style}>{name}</div>
      // <div className='gray-box'></div>
    // </Wrapper>
    // <Counter/>
    // <InputSample/>
      <>
         <Test/>
      {/* {console.log(users)} */}
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
     <div>활성 사용자 수 :{count}</div>
     </>
      )
}

export default App;
