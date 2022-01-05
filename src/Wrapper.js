import React from 'react';

// props.children을 렌더링해주어야지 자식(하위) 컴포넌트들이
// 보인다
function Wrapper({children}){
    const style={
        border: '2px solid black',
        padding: '16px',
    }
    return(
        <div style={style}>

            {children}
        </div>
    )
}

export default Wrapper;