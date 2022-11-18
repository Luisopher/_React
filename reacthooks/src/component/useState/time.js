import React, {useState} from "react";

const Time=()=>{

    const [time, setTime]=useState(1);
    //렌더링 될때마다 매번 실행된다!.

    const butClick=()=>{
        let newTime;
        if(time>23){
            newTime = 0;
        }else{
            newTime= time+1;
        }
        setTime(newTime)
    }
    return <div>
        <span>현재 시각 : {time}시</span>
        <button onClick={butClick} >Update</button>

    </div>
}
export default Time;