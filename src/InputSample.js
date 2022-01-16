import React from 'react';
import { useState } from 'react/cjs/react.development';

function InputSample(){

    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
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
        })
    }
    return(

        <div>

            <input 
                onChange={onChange}
                placeholder='이름'
                value={inputs.name}
                name="name"
                />
            <input 
                onChange={onChange}
                placeholder='닉네임'
                value={inputs.nickname}
                name="nickname"
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