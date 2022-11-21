import React, {useEffect, useState} from "react";


const Box = ({resizing}) => {

    const [style, setStyle] = useState({});

    useEffect(() => {
        setStyle(resizing());
        console.log('useEffect 소환!')
    }, [resizing]);

    return <div style={style}></div>
}
export default Box;