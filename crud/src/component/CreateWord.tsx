import {useRef,useState} from 'react';
// @ts-ignore
import useFetch from '../hooks/useFetch.ts'
import { useHistory } from "react-router-dom";
import {Iday} from './Daylist'

function CreateWord() {
    const days:Iday[] = useFetch('http://localhost:3000/days')
    const history = useHistory();
    const [isLoading , setIsLoading] =useState(false);
    function onSubmit(e:React.FormEvent) {
        e.preventDefault();
        if (!isLoading && dayRef.current && engRef.current && korRef.current) {
            setIsLoading(true)

            const day= dayRef.current.value
            const eng= engRef.current.value
            const kor= korRef.current.value


            fetch(`http://localhost:3000/words`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    day,
                    eng,
                    kor,
                    isDOne: false
                })
            }).then(res => {
                if (res.ok) {
                    alert('생성이 완료되었습니다.')
                    history.push(`/day/${day}`)
                    setIsLoading(false)
                }
            })
        }
    }

    const engRef = useRef<HTMLInputElement>(null)
    const korRef = useRef<HTMLInputElement>(null)
    const dayRef = useRef<HTMLSelectElement>(null)
    return (
        <form onSubmit={onSubmit}>
            <div className='input_area'>
                <label>Eng</label>
                <input type="text" placeholder='computer' ref={engRef}/>
            </div>
            <div className='input_area'>
                <label>Kor</label>
                <input type="text" placeholder='컴퓨터' ref={korRef}/>
            </div>
            <div className='input_area'>
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.day} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button
            style={{
                opacity: isLoading ? 0.3:1,
            }}>
                {isLoading ? '저장중...' :'저장'}</button>
        </form>
    );
}

export default CreateWord;