import React, {useEffect} from "react";

const Timer = () => {

    useEffect(() => {
        const timer = setInterval(() => {
           console.log('타이머가 시작되었습니다.')
        }, 1000);
        return () => {
            //정리작업해줄 clean up코드작성!
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.')
        }
    }, [])
    return (
        <div>
            <span>타이머를 시작합니다.</span>
        </div>
    )

}
export default Timer;