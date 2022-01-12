import React, { useRef, useState, useMemo, useCallback,useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs:{
    username:'',
    email:'',
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
}
function reducer(state,action){
  switch (action.type){
    case "CHANGE_INPUT":
      return{
        ...state,
        inputs:{
          ...state.inputs,
          [action.name]: action.value
        }
      }
      default:
        return state;
  }

}
function App() {
const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
      const {username, email}  = state.inputs;

      const onChange = useCallback(e => {
        const {name,value} = e.target;
        dispatch({
          type: "CHANGE_INPUT",
          name,
          value
        })
      },[]);
  // const [inputs, setInputs] = useState({
  //   username: '',
  //   email: ''
  // });
  // const { username, email } = inputs;
  // const onChange = e => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value
  //   });
  // };
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: 'velopert',
  //     email: 'public.velopert@gmail.com',
  //     active: true
  //   },
  //   {
  //     id: 2,
  //     username: 'tester',
  //     email: 'tester@example.com',
  //     active: false
  //   },
  //   {
  //     id: 3,
  //     username: 'liz',
  //     email: 'liz@example.com',
  //     active: false
  //   }
  // ]);

  // const nextId = useRef(4);
  // const onCreate =  useCallback(()=>{
  
  //     const user = {
  //       id: nextId.current,
  //       username,
  //       email
  //     };
  //     setUsers(users.concat(user));
  
  //     setInputs({
  //       username: '',
  //       email: ''
  //     });
  //     nextId.current += 1;
 
  // },[users]) 

  // const onRemove = id => {
  //   // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //   // = user.id 가 id 인 것을 제거함
  //   setUsers(users.filter(user => user.id !== id));
  // };
  // const onToggle = id => {
  //   setUsers(
  //     users.map(user =>
  //       user.id === id ? { ...user, active: !user.active } : user
  //     )
  //   );
  // };
  // const count =useMemo(()=>{
  //  return countActiveUsers(users)
  // },[users])
  return (
    <>
      <CreateUser username={username} email={email}
      onChange={onChange}
      />
      <UserList users={users}  />
      <div>활성사용자 수 : 0</div>
    </>
  );
}

export default App;