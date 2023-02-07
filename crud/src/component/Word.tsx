import {useState} from 'react';

interface Iprops {
    word : Iword;
}
export interface Iword {
    "day": string,
    "eng": string,
    "kor": string,
    "isDone":boolean,
    "id": number
}
function Word({word}:Iprops) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow)
    }

    function toggleDone() {
        // setIsDone(!isDone)
        fetch(`http://localhost:3000/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            })
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone)
            }
        })
    }

    function del() {
        if (window.confirm('정말로 삭제하시겠습니까?')){
            fetch(`http://localhost:3000/words/${word.id}`, {
                method: 'DELETE',
            })
    }}


    return (
        <tr className={isDone ? 'off' : ''} onChange={toggleDone}>
            <td><input type="checkbox" checked={word.isDone}/></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>{isShow ? '숨기기' : '뜻 보기'}</button>
                <button className='btn_del' onClick={del}>삭제</button>
            </td>
        </tr>

    )
}

export default Word;