import React, { useContext, useEffect } from 'react';
import { UserDispatch } from './App';

const User =React.memo( ({user})=>{
    const dispatch = useContext(UserDispatch);

    useEffect(()=>{
        console.log('컴포넌트가 화면에 나타남');
        return ()=>{
            console.log("컴포넌트가 화면에서 사라짐");
        }
    })
     return(
         <div>
             <b 
                 style={{
                     cursor:'pointer',
                   color:user.active === true ? "green" : null,
                 }}
                 onClick={()=>{
                     dispatch({type: 'TOGGLE_USER', id:user.id});
                 }}
                 >
                     {user.username}
             </b> 
             <span> ({user.email}) </span>
             <button onClick={()=> {
                 dispatch({type:'REMOVE_USER', id:user.id});
             }}>삭제</button>
             {/* onRemove는 매개변수를 넘겨줘야하기 때문에 ()를 써줘야한다. 
             이때 문제가 생기는데, ()를 사용하면 함수 등록이 아니라 호출이 
             되어버리기 때문에 arrow function으로 감싸줬다
             */}
         </div>
     )
});

function UserList({users}) {

    
    return(

        <>

            {users.map((e,i)=>{
                return ( <User  user={e} key={e.id}></User> )
            })}
           
        </>
        
    )
}

export default React.memo(UserList);