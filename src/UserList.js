import React from 'react';

function User({user}){
   
   
    return(
        <div>
            <b>{user.username}</b>   <span> ({user.email}) </span>
        </div>
    )
}

function UserList() {

    const users = [
        {
            id:1,
            username:'kim',
            email:'iojfoasdikf@laksdasd.com',
        },
        {
            id:2,
            username:'ddm',
            email:'DSDWdadikf@laksdasd.com',
        },
        {
            id:3,
            username:'dasdas',
            email:'zzssdikf@laksdasd.com',
        },
    ]
    return(

        <>

            {users.map((e,i)=>{
                return ( <User user={e} key={e.id}></User> )
            })}
           
        </>
        
    )
}

export default UserList;