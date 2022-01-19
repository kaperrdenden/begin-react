import React, { useRef, useState, useMemo, useCallback,useReducer } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';

function countActiveUsers(users){
  console.log('활성 사용자 수 세는 중');
  return users.filter((e,i)=>{return e.active === true}).length;
}
const initialState ={
 
  users: [
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
]
};
function reducer(state, action){
  switch (action.type) {

    case 'CREATE_USER':
      return{
        
       inputs:initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return{
        ...state,
        users: state.users.map(user =>
            user.id === action.id ? {...user,active:!user.active} : user
          )
      }
    case 'REMOVE_USER':
      return{
        ...state,
        users:state.users.filter(user=> user.id !== action.id)
      }
  }
  return state;
}
export const UserDispatch = React.createContext(null);
function App() {
  const [{username,email},onChange,reset]= useInputs({
    username:'',
    email:''
  });
  const [state,dispatch] = useReducer(reducer,initialState)
  const nextId = useRef(4);

  const {users} = state;


  // const [inputs, setInputs] = useState({  username:'',email:'', })
  // const {username,email} = inputs;

  // const onChange = useCallback( (e)=>{
  //   const {value, name} = e.target;

    // setInputs(
    //  { ...inputs,
    //   [name]:value,}
    // )
  //   dispatch({
  //     type:'CHANGE_INPUT',
  //     name,
  //     value,
  //   })
  // },[]);
  const onCreate = useCallback(()=>{
    dispatch({
      type:'CREATE_USER',
      user:{
        id:nextId.current,
        username,
        email
      }
    });
    reset();
    nextId.current += 1;
  },[username, email, reset])
  // const onToggle = useCallback((id)=>{
  //   dispatch({
  //     type:"TOGGLE_USER",
  //     id,
  //   })
  // },[])
  // const onRemove = useCallback((id)=>{
  //   dispatch({
  //     type: "REMOVE_USER",
  //     id
  //   })
  // },[])
//   const [users, setUsers] = useState([
//     {
//         id:1,
//         username:'kim',
//         email:'iojfoasdikf@laksdasd.com',
//         active:true,
//     },
//     {
//         id:2,
//         username:'ddm',
//         email:'DSDWdadikf@laksdasd.com',
//         active:false,
//     },
//     {
//         id:3,
//         username:'dasdas',
//         email:'zzssdikf@laksdasd.com',
//         active:false,
//     },
// ]) 
  // const nextId = useRef(4);
  
  // const onCreate = useCallback(()=>{
  //   const user = {
  //     id:nextId.current,
  //     username,
  //     email,
  //   }
  // //  setUsers([...users, user])
  // setUsers(users.concat(user));
  //   setInputs({
  //     username:'',
  //     email:''
  //   },[users,username,email])
  //   nextId.current += 1;
  // })
  
  // const onRemove = useCallback( (id)=>{
  //   setUsers(users.filter((user,i)=>{return user.id !== id }))
  // },[users]);
 
  // const onToggle = useCallback((id)=>{
    // 액티브 버튼을 누르면 이 함수로 인해서 users 를 한번 싹 돈다
  //   setUsers(
  //     users.map(user=>
  //       user.id === id ? {
  //         ...user,
  //         active : !user.active,
  //       }
  //       : user
  //       )
  //   )
  // },[users]) 
  const count = useMemo(()=>{return countActiveUsers(users)},[users]) ;
  // users내용이 바뀌지 않았다면 이전의 값을 계속 사용함.
  return (
    <>
    <UserDispatch.Provider value={dispatch}>
     {/* <InputSample/> */}
     <CreateUser username={username}
      email={email}
       onChange={onChange}
        onCreate={onCreate} />
     <UserList 
      users={users} 
      // onRemove={onRemove}
      // onToggle={onToggle}
    />
     <div>활성사용자 수 :  {count}</div>
     </UserDispatch.Provider>
    </>
  );
}

export default App;