import React, { useContext, useEffect } from 'react';
import { UserDispatch } from './App';

function User({user}) {
    return(
   
             <div>
                <b>{user.username}</b> <span>({user.email})</span>
            </div>
      
    )
}
function UserList({ users }) {
    return (
      <div>
       
      </div>
    );
  }


export default UserList;