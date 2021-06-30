import React,{useState} from 'react';

const Counter = ({num}) => {
    let [number,newNum] = useState(num===undefined?num=0:num);
    const countNum =()=>{
        let result = (++number);
        newNum(result);
    }

    return (
        <div style={{'width':'300px','height':'100px','margin':"auto","textAlign":"center"}}>
            <input type="text" value={number} style={{"margin":"10px","textAlign":"center"}}/>
            <br></br>
            <button onClick={countNum}>카운트 하기</button>
        </div>
    );
};
export default Counter;