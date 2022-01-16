import React from 'react';
import { useState } from 'react/cjs/react.development';

function InputSample(){

    const [text, setText] = useState('');
    return(

        <div>

            <input onChange={(e)=>{
                setText(e.target.value);
                console.log(text)}} value={text} />
            <button onClick={(e)=>{
                setText('')
            }}>초기화</button>
            <div>
                <b>값: </b>
            </div>

        </div>
    )
}
export default InputSample;