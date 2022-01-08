import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Number(){


    const [number,setNumber]= useState(0);
    const [name,setName] =useState('Josh');

    useEffect(()=>{
        console.log("hello");
    },[name])
    const counter =()=>{return setNumber(number+1)}
    const nameChanger = () =>{return setName("mike")}
    return(
        <div>
            <button onClick={counter}>click</button>
            <button onClick={nameChanger}>change name</button>
            <div>{number}</div>
            <div>{name}</div>
        </div>
    )
}

export default Number;