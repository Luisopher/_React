import React, {useMemo, useState} from "react";

const hardCalculate = (number) => {
    //함수가 작동할때 log출력
    console.log('어려운 계산')
    //시간을 지연시키기 위한 반복문 삽입
    for (let i = 0; i < 999999999; i++) {
    }
    //값은 걀국 10000
    return number + 10000;
}

const easyCalculate = (number) => {
    // 함수가 작동할때
    console.log('쉬운 계산')
    //
    for (let i = 0; i < 999999999; i++) {
    }
    return number + 1;
}

const Usememo1 = () => {
    // 어려운 계산의 값을 선언
    const [hardNumber, setHardNumber] = useState(1);
    // 쉬운 계산의 값을 선언
    const [easyNumber, setEasyNumber] = useState(1);

    //useMemo를 사용해 어려운 계산은 어려운 계산을 할떄만 사용하자!
    const hardSum = useMemo(()=>{
        return hardCalculate(hardNumber);
    },[hardNumber]);

    //input을 받은 값을 넣어준다
    const easySum = easyCalculate(easyNumber);

    return <div>
        <h3>어려운 계산기</h3>
        {/* 타겟의 value 값을 setHardNumber로 넣어준다*/}
        <input type="number" value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))}/>
        <span>+10000={hardNumber}</span>

        <h3>쉬운 계산기</h3>
        {/* 타겟의 value 값을 setEasyNumber로 넣어준다*/}
        <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))}/>
        <span>+1={easyNumber}</span>
    </div>
}

export default Usememo1;