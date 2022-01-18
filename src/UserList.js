import React from 'react';

function User({user, onRemove, onToggle}){
   
   
    return(
        <div>
            <b 
                style={{
                    cursor:'pointer',
                  color:user.active === true ? "green" : null,
                }}
                onClick={()=>{onToggle(user.id)}}
                >
                    {user.username}
            </b> 
            <span> ({user.email}) </span>
            <button onClick={()=> onRemove(user.id) }>삭제</button>
            {/* onRemove는 매개변수를 넘겨줘야하기 때문에 ()를 써줘야한다. 
            이때 문제가 생기는데, ()를 사용하면 함수 등록이 아니라 호출이 
            되어버리기 때문에 arrow function으로 감싸줬다
            */}
        </div>
    )
}

function UserList({users, onRemove, onToggle}) {

    
    return(

        <>

            {users.map((e,i)=>{
                return ( <User onRemove={onRemove} onToggle={onToggle} user={e} key={e.id}></User> )
            })}
           
        </>
        
    )
}

export default UserList;