import React, {useEffect, useMemo, useState} from "react";


const Usememo2 = () => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);
    // const location = isKorea ? '한국' : '미국';

    const location =useMemo(()=>{
        return {country: isKorea ? '한국' : '외국'}
    },[isKorea])
        //location 값이 바뀔때 호출!
        useEffect(()=>{
            console.log('useEffect 호출')
        },[isKorea])
    return <div>
        <h2>하루에 몇그릇 먹나요?</h2>
        <input
            type="number"
            value={number}
            onChange={(e) => setNumber((e.target.value))} />
        <br/>
        <br/>
        <br/>
        <h2>어느나라에 있니?</h2>
        <p>나라:{location.country}</p>
        <button onClick={()=>setIsKorea(!isKorea)}>나지금?</button>
    </div>
}

export default Usememo2;