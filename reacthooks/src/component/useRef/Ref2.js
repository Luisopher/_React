import React, {useEffect, useRef} from "react";

const Ref2 = () => {

    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
        console.log(inputRef)
    },[]);

    const login = ()=>{
        alert(`횐영합니다~ ${inputRef.current.value}고객님!!`)

        inputRef.current.focus();
    }
    return <div>
        <input ref={inputRef} type="text" placeholder="username"/>
            <button onClick={login}>로그인</button>
    </div>
}
export default Ref2;

