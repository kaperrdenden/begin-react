import React, { useRef, useState, useMemo, useCallback,useReducer } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs:{
    username:'',
    email:'',
  },
  users: [
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
  ]
};

function reducer(state, action){
  switch (action.type){
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs:{
          ...state.inputs,
          [action.name]:action.value,

        }
      }
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      }
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.id ? {...user, active:!user.active} 
          : user
        })
      }
    case "REMOVE_USER":
        return {
          ...state,
          users: state.users.filter((user)=>{
            return user.id !== action.id 
          })
        }
    }
  return state;
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  const { username,email } = state.inputs;

  const onChange = useCallback( e => {
    const {name, value} = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
  });
  },[] );
  const onCreate = useCallback(() => {
    dispatch({
      type:"CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      }
      
    });
    nextId.current += 1;
  },[username,email]);
 
  return (
    <UserDispatch.Provider value={dispatch}>
   
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
     
      />
      <UserList 
        users={users} 
    
      />
       
      <div>활성사용자 수: 0</div>
   
    </UserDispatch.Provider>
  );
}

export default App;