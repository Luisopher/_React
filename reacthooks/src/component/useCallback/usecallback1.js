import React, { useCallback, useEffect, useState } from "react";

const Usecallback1 = () => {
    // number값을 useState를 사용하여 선언한다!
    const [number, setIsNumber] = useState(0);

    //단순히 useCallback 사용해 현재 number를 console에 출력하는 함수!
    // 두번째 인자로 number를 받았기 때문에 number가 변해야 함수가 작동한다!
    const someFunction = useCallback(() => {
        console.log(`someFunc : num: ${number}`);
        // 반환되는 값은 없다!
        return;
    }, [number]);


    // useEffect 두번째 인자로 someFunction이 변경 되었을떄만 실행되는 함수!!
    useEffect(() => {
        console.log("someFunction()이 변경되었습니다.");
    }, [someFunction]);
    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setIsNumber(e.target.value)}
            />
            <br />
            <button onClick={someFunction}>Call someFunc</button>
        </div>
    );
};

export default Usecallback1;
