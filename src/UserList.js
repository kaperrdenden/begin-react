import React, { useContext, useEffect } from 'react';
import { UserDispatch } from './App';

function User({user}) {
    return(
   
             <div>
                <b>{user.username}</b> <span>({user.email})</span>
            </div>
      
    )
}
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


export default UserList;