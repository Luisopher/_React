import React, {useEffect, useState} from 'react';
import './Clock.css'

function Clock(props) {
    //useState로 시간을 정의해준다!
    const [time, setTime] = useState(new Date());

    //useEffect를 사용하여 1초마다 반복하며
    // setTime를 사용하여 1초마다 새로운 시간을 삽입한다!
    useEffect(() => {
        //첫번째 인자는 일정시간마다 실행될 함수!
        const id = setInterval(() => {
            setTime(new Date());
            //두번째 인자는 얼마동안의 간격마다 수행할 것인지를 보여주는 함수!
        }, 1000)
    })
    return (
        <div className='container'>
            <div className='container_title'>현재 시간</div>
            {/*Time의 기본 함수를 사용하여 시간을 보여준다!*/}
            <div className='clock'>
                <div className='container_text'>
                    <div className='text'>{time.toLocaleTimeString().substring(3, 4)}</div>
                    <div className='text'>{time.toLocaleTimeString().substring(5, 7)}</div>
                    <div className='text'>{time.toLocaleTimeString().substring(8, 10)}</div>
                </div>
            </div>
        </div>

    );
}

export default Clock;