import React, { useState } from 'react';

function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}
function UserList({users}){
   
    return(
        <div>
            {console.log(users)}
            {users.map((e,i)=>{
                return (<User key={e.id} user={e}></User>)
            })}
        </div>
    )
}
export default UserList