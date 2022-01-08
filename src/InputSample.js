import React, { useState,useRef, useEffect } from 'react';

function InputSample(){
    useEffect(()=>{
        console.log("발동");
    })
    const [inputs,setInputs] = useState({
    name:'',
    nickname:'',
})
    const nameInput = useRef();

    const {name,nickname} = inputs;
    // 이제 input.name과 input.nickname을 간단하게 쓰겠다.


    const onChange = (e)=>{
        const {value,name} = e.target;
        // let k = name;

        // e.target.value,name을 간단하게 쓰겠다
        // console.log(value,e.target.value);
        setInputs({
            ...inputs,
            [name]:value,//name키를 가진 값을 value로설정
//만약 []대괄호가 없었다면 name만 적음. 그래서 nickname을
//수정하는 경우에도 항상 name만 value로 채워짐.
// 일반변수를 선언해서 객체내부에서 변수이름을 사용하면
// 그 값이 나오는게 아니라 변수이름으로 새로운 프로퍼티가
// 생성되네..
//[]는 객체내부에서 값을 쓰는 기법인가봐
           
            //이게 뭔 뭐같은 소리인가 했는데
            //이걸 다 풀어서 적어보면
            //name:''
            //nickname:''
            //name or nickname :e.target.value
            //즉 중복선언한것이다 [name]
            // name:value,
        });
    };

    const onReset = ()=>{
        setInputs({
            name:'',
            nickname:''
        });
        nameInput.current.focus();
    }
  
    return(
        <div>
            <input name="name"
                   placeholder='이름'
                   onChange={onChange}
                   value={name}
                   ref={nameInput} 
            />
            <input name='nickname'
                   placeholder='닉네임'
                   onChange={onChange}
                   value={nickname}                   
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample