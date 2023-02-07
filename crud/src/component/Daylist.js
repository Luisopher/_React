import React,{useState,useEffect} from 'react';
import  {Link} from "react-router-dom"
import useFetch from'../hooks/useFetch.ts'

export interface Iday{
    id:number;
    day:number;
}

function Daylist() {

   // useEffect(()=>{
   //    fetch(' http://localhost:3001/days')
   //        .then(res=>{
   //            return res.json()
   //        })
   //        .then(data=>{
   //            setDays(data)
   //        })
   // },[])

   const days :Iday[] = useFetch('http://localhost:3000/days')

    if(days.length === 0){
        return <span>로딩중....</span>
    }
    return (
        <ul className='list_day'>
            {days.map(day=>(
                <li key={day.id}>
                 <Link to={`/day/${day.day}`}> Day {day.day}</Link>
                </li>
            ))}

        </ul>
    );
}

export default Daylist;