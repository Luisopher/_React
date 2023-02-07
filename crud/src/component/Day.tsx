import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
// @ts-ignore
import  Word,{Iword} from './Word.tsx'
// @ts-ignore
import useFetch from'../hooks/useFetch.ts'


function Day() {
    const {day} = useParams<{day:string}>();

    // useEffect(()=>{
    //    fetch(`http://localhost:3001/words?day=${day}`)
    //        .then(res=>{
    //            return res.json()
    //        })
    //        .then(data=>{
    //            setDays(data)
    //        })
    // },[])
    const words : Iword = useFetch(`http://localhost:3000/words?day=${day}`)

    return (
        <div>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>로딩중..</span>}
            <table>
                <tbody>
                {words.map(word =>
                    <Word word={word} key={word.id}/>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default Day;