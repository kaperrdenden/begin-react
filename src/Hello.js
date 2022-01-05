import React from 'react';
function Hello({color,name,isSpecial}){
    //@1 비구조화 할당, 구조분해 할당








    return(
    
    
    <div style={{color:color}}>
        {/* {isSpecial===true
        ?<b>*</b>
        :null
        null뿐만 아니라 undefined,false렌더링하면
        아무것도 안나옴
        } */}
        {isSpecial&&<b>*</b>}
        안녕하세요{name}</div>
    
    )




}
//@2 프롭스의 디폴트값정하기 
Hello.defaultProps = {
    name:"이름없음",
}



export default Hello;