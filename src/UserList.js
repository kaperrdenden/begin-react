import React, { useContext, useEffect } from 'react';
import { UserDispatch } from './App';

function User({user, onRemove, onToggle}) {
    return(
   
             <div>
                <b
                   style={{
                       cursor: 'pointer',
                       color : user.active ? 'green' : 'black',
                   }} 
                   onClick={()=>{
                       onToggle(user.id);
                   }}
                >{user.username}</b> <span>({user.email})</span>
                <button onClick={()=> onRemove(user.id)}>삭제</button>
            </div>
      
    )
}
function UserList({users, onRemove, onToggle}) {
  
    
    return (
      <div>
          {console.log(users,"here")}
        {users.map(user => (
          <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
        ))}
      </div>
    );
  }


export default UserList;