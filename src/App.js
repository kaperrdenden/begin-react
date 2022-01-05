import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  const name = "react";
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize : 24,
    padding: 'irem'
  }
  return (
    <Wrapper>

      <Hello name="react" color="red"
      //isSpecial={true}
      isSpecial
      // 이렇게 넘길 props의 이름만 적으면 이는 알아서 true로 자동초기화 
       />
      <Hello color="pink" />
      
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
    </Wrapper>
      )
}

export default App;
