import React, { useState } from 'react';

function CreateUser({username,email,onChange,onCreate}){
   
    return(
        <div>
           <input 
            name="username"
            placeholder='계정명'
            onChange={onChange}
            value={username}
            // 이건 상위 컴포넌트에 존재하는 스테이트 내용을
    //인풋필드에 반영하겠다는 뜻이므로 만약
    //스테이트값이 ''이면 영원히 인풋창이 안채워짐
    
           />
           <input
            name="email"
            placeholder='이메일'
            onChange={onChange}
            value={email}
           />
           <button onClick={onCreate}>클릭</button>
        </div>
    )
}
export default React.memo(CreateUser) 