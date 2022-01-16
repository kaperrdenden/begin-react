import React from 'react';
import { useRef, useState } from 'react/cjs/react.development';

function InputSample(){
    const nameInput = useRef();

    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
        // name과 nickname은 각 inputs창을 구별해줌. 즉 각각 하나의 인풋창을 나타냄.
    });
    const {name, nickname} = inputs;
    const onChange = (e)=>{
        const {value,name} = e.target;
        setInputs({
            ...inputs,
            [name]:value,
        })
        console.log(name,nickname);
    };
    const onReset = ()=>{
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus();

    }
    return(

        <div>

            <input 
                name="name"
                onChange={onChange}
                placeholder='이름'
                value={inputs.name}
                ref={nameInput}
                />
            <input 
                name="nickname"
                onChange={onChange}
                placeholder='닉네임'
                value={inputs.nickname}
                />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}: ({nickname})
            </div>

        </div>
    )
}
export default InputSample;