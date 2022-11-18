import React, {useEffect, useRef, useState} from 'react';


const Ref_1 = () => {
    const [renderer, setRenderer] =useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    //렌더링 수를 알아보자
    const [count, setCount] = useState(1);
    const renderCount = useRef(1);

    //렌더링 하는 함수!
    const doRendering =()=>{
        setRenderer(renderer+1);
    }
    //클릭시 ref의 값을 1씩 증가 심키는 함수
    const increaseRef = ()=>{
        countRef.current = countRef.current+1;
    }

    const increaseVar = ()=>{
        countVar = countVar+1;
    }

    useEffect(()=>{
        renderCount.current = renderCount.current+1;
        console.log('렌더링 수 : ',renderCount.current)
    })

    return <div>
        <p>Ref : {countRef.current}</p>
        <p>Var : {countVar}</p>
        {/*렌더링 되는 순간 변수값은 초기화 된다!!*/}
        <button onClick={doRendering}>렌더링!</button>
        {/*렌더링이 되면 값이 출력된다!*/}
        <button onClick={increaseRef}>Ref올려!</button>
        {/*렌더링 되는 순간 변수값이 초기화 되서 출력은 0 으로 된다!*/}
        <button onClick={increaseVar}>변수 올려!</button>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>올려!</button>
    </div>
}

export default Ref_1;