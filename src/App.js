import React, {useRef} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';
import Counter from './Counter';
import InputSample
 from './InputSample';
 import UserList from './UserList';
 import CreateUser from './CreateUser';
import { useState } from 'react/cjs/react.development';
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
    },
    {
        id:2,
        username:"do",
        email:'sdasd',
    },
    {
        id:3,
        username:"dosd",
        email:'sdasd',
    }
  ])
  const nextId = useRef(4);
  const onCreate = ()=>{
    console.log(username);
    const user = {
      id:nextId.current,
      username:inputs.username,
      email,
    }
    setUsers([...users, user]);
   
    setInputs({
      username:'',
      email:'',
    })
    
    
  
    nextId.current += 1;
  }
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
      {console.log(users)}
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
    <UserList users={users}/>
     </>
      )
}

export default App;
