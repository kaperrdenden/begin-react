import React, { useRef, useState, useMemo, useCallback,useReducer } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';
import produce from 'immer';
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
    },
    {
      id:4,
      username: 'kg',
      email: 'sdasdsasda2ssssmaiasdasdadsdasdl.com',
      active:false,
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(5);

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