import React,{useRef} from 'react';


const Ref_1 =()=>{
    const countRef = useRef(0);
    let countVar = 0;
    return <div>
            <p>Ref : {countRef.current}</p>
        <p>Var : {countVar}</p>
    </div>
}

export default Ref_1;