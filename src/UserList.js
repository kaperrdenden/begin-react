import React from 'react';

function User({user, onRemove}){
   
   
    return(
        <div>
            <b>{user.username}</b>   <span> ({user.email}) </span>
            <button onClick={()=> onRemove(user.id) }>삭제</button>
            {/* onRemove는 매개변수를 넘겨줘야하기 때문에 ()를 써줘야한다. 
            이때 문제가 생기는데, ()를 사용하면 함수 등록이 아니라 호출이 
            되어버리기 때문에 arrow function으로 감싸줬다
            */}
        </div>
    )
}

function UserList({users, onRemove}) {

    
    return(

        <>

            {users.map((e,i)=>{
                return ( <User onRemove={onRemove} user={e} key={e.id}></User> )
            })}
           
        </>
        
    )
}

export default UserList;