import React, {useState, useEffect} from "react";

const UseEffectTest=()=> {
    const [time, setTime] = useState(1);
    const [name, setName] = useState('');


    //마운트 될때, 그리고 [time]이 변경될때만 실행!
    //화면이 재실행 될때만 사용하고 싶으면 빈배열을 넣어주면된다.
    useEffect(() => {
        console.log('렌더링');
    },[time])

    //마운트 될때만!
    useEffect(()=>{
        console.log('재실행됐따!')
    },[]);

    const butClick = () => {
        let newTime;
        if (time > 23) {
            newTime = 0;
        } else {
            newTime = time + 1;
        }
        setTime(newTime)
    }

    const handleInputChange = (e) => {
        setName(e.target.value)
    }


    return <div>
        <h3>마운팅 그리고 시각버튼을 누를때 useEffect 실행!</h3>
        <span>현재 시각 : {time}시</span>
        <button onClick={butClick}>Update</button>
        <br/>
        <h3>useEffect Test</h3><input type='text' value={name} onChange={handleInputChange}/><br/>
        <br/><span>name : {name}</span><br/><br/>

    </div>
}

export default UseEffectTest;