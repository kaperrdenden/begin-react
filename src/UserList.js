import React, { useContext, useEffect } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({user}) {
    useEffect(()=>{
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('화면에서 사라짐')
        }
    },[user])

    return(
   
             <div>
                <b
                   style={{
                       cursor: 'pointer',
                       color : user.active ? 'green' : 'black',
                   }} 
                   onClick={()=>{}}
                >{user.username}</b> <span>({user.email})</span>
                <button onClick={()=>{}}>삭제</button>
            </div>
      
    );
});

function UserList({users}) {
  
    
    return (
      <div>
          {console.log(users,"here")}
        {users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </div>
    );
  }


export default React.memo(UserList) ;