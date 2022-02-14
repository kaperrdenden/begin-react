import React from 'react';
import { useState } from 'react/cjs/react.development';

const SortedWords = ({words}) => {
    const sortWords = () => {
        console.log("sortWords");
        // delay(500);
        return words.sort();
    }
    
    const sortedWords = sortWords();

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
        console.log(word,"hadn");
        setWords(words.concat(word));
        setWord("");
        // console.log(words);
    };
    return(
        <>
            <h1>React Hooks: useMemo</h1>
            <div>
                {/* dasdsa */}
                <SortedWords  words={words}/>
            </div>
            <input 
                value={word}
                onChange={({target: {value}}) => { 
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