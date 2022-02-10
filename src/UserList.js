import React, { useContext, useEffect } from 'react';
import { UserDispatch } from './App';

function User({user}) {
    return(
   
             <div>
                <b>{user.username}</b> <span>({user.email})</span>
            </div>
      
    )
}

function UserList() {

    const users = [
        {
            id:1,
            username: 'Dong',
            email: 'weather2sogood@gmail.com',
        },
        {
            id:2,
            username: 'hee',
            email: 'ssmail.com',
        },
        {
            id:3,
            username: 'kang',
            email: 'wdsa2ssssmail.com',
        }
    ]
    
    return(

        <>
         {users.map((user) => {
            return( <User user={user} key={user.id} /> )
         })}
         
        </>
        
    )
}

export default UserList;