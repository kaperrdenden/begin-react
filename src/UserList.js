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

   
    
    return(

        <>
       
              {users.map((user) => {
            return( <User user={user} key={user.id} /> )
         })}
         
        </>
        
    )
}

export default UserList;