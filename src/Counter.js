import React, { useState, useReducer } from 'react';

function reducer(state, action) {
    if (action.type==="INCREMENT"){
        return state + 1
    }else if(action.type === "DECREMENT"){
        return state - 1
    }
    return state;
}

function Counter(){
    const [number, dispatch] = useReducer(reducer,0)
    // const [number, setNumber]  = useState(0);

    const onIncrease = ()=>{
      dispatch({type:"INCREMENT"});
    };
    const onDecrease=()=>{
        dispatch({type:"DECREMENT"});
    }

    return(
        <div>

            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter