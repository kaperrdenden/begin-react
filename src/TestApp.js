import React from 'react';
import { useMemo, useState } from 'react/cjs/react.development';

const SortedWords = ({words}) => {
    const sortWords = () => {
        console.log("sortWords");
        
        return words.sort();
    }
    
    const sortedWords = useMemo(sortWords ,[words]) 
    // 이렇게 함수 통으로 넘겨줘도 된다.


    // useMemo가 없을 경우에는 input창에 글자를 쓰면 -> word라는 state가 변경됨
    // -> word라는 state를 가진 TestApp 컴포넌트가 리렌더링됨 -> TestApp의 자식 컴폰넌트인
    // SortedWords가 리렌더링 됨 -> sortWords();도 매번 실행됨 
    // 근데 아무리 input창의 값이 바뀌어 봤자 sortWords();의 결과는 바뀌지 않으므로
    // 이 상황 최적화 필요

    return(
        <>
            <h2>Sorted Words</h2>
            <ul>
                {sortedWords.map((word, idx) => {
                    return (
                        <li key={idx}>{word}</li>
                    )
                })}
            </ul>
        </>
    )
}

const TestApp = () => {
    const [words, setWords] = useState([]);
    const [word, setWord] = useState("");

    const handleClick = () => {
       
        setWords(words.concat(word));
        setWord("");
        
    };
    return(
        <>
            <h1>React Hooks: useMemo</h1>
            <div>
                
                <SortedWords  words={words}/>
            </div>
            <input 
                value={word}
                onChange={(  {target: {value}} ) => { 
                    console.log(word);
                    setWord(value);
                    console.log(word);
                }}
                placeholder='word'
            />
            <button onClick={handleClick}>+</button>
        </>
    )
}

export default TestApp;