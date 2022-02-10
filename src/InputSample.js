import React from 'react';
import { useRef, useState } from 'react/cjs/react.development';

function InputSample(){
   const [text, setText] = useState('');
   const onChange = (e) => {
       setText(e.target.value);
   };
   const onReset = () => {
       setText('');
   }
    return(
        <>
            <input 
                onChange={onChange}
                value={text}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:{text}</b>
            </div>
        </>
    )
}
export default InputSample;