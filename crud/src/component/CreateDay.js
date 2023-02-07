import React from 'react';
import useFetch from '../hooks/useFetch.ts'
import { useHistory } from "react-router-dom";

function CreateDay() {
    const days = useFetch('http://localhost:3000/days')
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3000/days`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                day: days.length +1,
            })
        }).then(res => {
            if (res.ok) {
                alert('생성이 완료되었습니다.')
                history.push(`/`)
            }
        })
    }
    return (
        <div>
            <h1>현재 일수 : {days.length}일</h1>
            <button onClick={onSubmit}>Day추가</button>
        </div>
    );
}

export default CreateDay;