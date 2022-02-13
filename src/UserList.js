import React, { useContext, useEffect } from 'react';
import { UserDispatch } from './App';

function User({user, onRemove}) {
    return(
   
             <div>
                <b>{user.username}</b> <span>({user.email})</span>
                <button onClick={()=> onRemove(user.id)}>삭제</button>
            </div>
      
    )
}
function UserList({users, onRemove}) {
  
    
    return (
      <div>
          {console.log(users,"here")}
        {users.map(user => (
          <User user={user} key={user.id} onRemove={onRemove} />
        ))}
      </div>
    );
  }


export default UserList;