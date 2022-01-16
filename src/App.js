import React, { useRef, useState, useMemo, useCallback,useReducer } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
function App() {

  const onIncrease = ()=>{
    console.log("+1");
  }
  const onDecrease = () => {
    console.log("-1");
  }
  return (
    <>
      <Counter/>
    </>
  );
}

export default App;