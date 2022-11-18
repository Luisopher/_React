import React,{useState,useRef} from "react";

const Ref=()=>{
    //0으로 초기화된 카운트!
    const [count, setCount] = useState(0);

    //countRef 는 current값을 가지고있다.
    const countRef = useRef(0);

    //함수가 실행될때마다 카운트를 1씩 증가시키는중
    const increaseCountState = ()=>{
        setCount(count +1);
    }
    //바로증가하는것이 아니라 렌더링이 되어야 출력된다!
    //자체적으로 리렌더링을 해주지는 않는다!
    const increaseCountRef = ()=>{
        countRef.current = countRef.current+1;
    }

    return <div>
        <p>State: {count}</p>
        <p>Ref : {countRef.current}</p>
        <button onClick={increaseCountState}>State 올려!</button>
        <button onClick={increaseCountRef}>State 올려!</button>
    </div>
}
export default Ref;