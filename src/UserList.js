import React, { useState } from 'react';

function User({user,onRemove,onToggle}){
    return(
        <div>
            
            <b 
                style={{
                    cursor:'pointer',
                    color: user.active === true
                    ? 'green' 
                    : 'black'
                }}
                onClick={()=>{
                    onToggle(user.id);                }}
            >{user.username}
            </b> 
            <span>({user.email})</span>
        <button onClick={()=>{
        //   console.log(user.id);
          onRemove(user.id);
            // 여기서 onclick내부에서 바로 그냥 
//onRemove를 남겨둘 수 없었던 이유는
//여기서 user.id를 넘겨줘야하기 때문이다.       
       }}>삭제</button>
        </div>
    )
}
function UserList({users,onRemove,onToggle}){
   
    return(
        <div>
            {console.log(users)}
            {users.map((e,i)=>{
                return (<User key={e.id} user={e} onRemove={onRemove} onToggle={onToggle}></User>)
            })}
        </div>
    )
}
export default UserList