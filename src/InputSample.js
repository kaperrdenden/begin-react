import React from 'react';
import { useRef, useState } from 'react/cjs/react.development';

function InputSample(){
   const [inputs, setInputs] = useState({
       name:'',
       nickname:'',
   });

   const {name, nickname} = inputs; 

   const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [e.target.name] : value,
            // [그냥 value,]
        });
   };
   const onReset = () => {
       setInputs({
           name:'',
           nickname:'',
       });
   }
    return(
        <>
            <input 
                name="name" 
                placeholder='이름'
                value={name}
                onChange={onChange}
                />
            <input 
                name="nickname" 
                placeholder='닉네임' 
                value={nickname} 
                onChange={onChange}
                />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:
                    {name}
                    ({nickname})
                    </b>
            </div>
        </>
    )
}
export default InputSample;