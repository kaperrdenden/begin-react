import React from 'react';

function User({user}){
   
   
    return(
        <div>
            <b>{user.username}</b>   <span> ({user.email}) </span>
        </div>
    )
}

function UserList({users}) {

    
    return(

        <>

            {users.map((e,i)=>{
                return ( <User user={e} key={e.id}></User> )
            })}
           
        </>
        
    )
}

export default UserList;