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

function App() {

 
  return (
    <>
      <CreateUser 
      
      />
      <UserList 
        users={[]} 
      />
       
      <div>활성사용자 수: 0</div>
    </>
  );
}

export default App;