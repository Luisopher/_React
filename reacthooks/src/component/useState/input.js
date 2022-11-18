import React, {useState} from "react";
const heavyWork=()=>{
    console.log('엄청 무거운 자료!');
    return ["홍길동", "김민수"];
}
const Input =()=> {
    //초기값을 바로 입력해줄경우 렌더링 될때마다 값을 불러오기 때문에
    // 프로그램이 느려질수 있다.
    // 그럼으로 초기값을 먼저 선언하고 콜백함수를 이용해 리턴해주면 첫 렌더링
    // 때 값으 불러오고 반복하지 않는다!
    const [names, setNames] = useState(()=>{
        return heavyWork();
    });
    const [input, setInput] = useState('');
    //input을 사용하여 입력된 값을 useState에 저장
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
//새로 입력받은 값을 가져오기!
    const handleUpload = (e) => {
        e.preventDefault();
        setNames((prevState) => {
            return [input, ...prevState];

        });
    };
    return (<div>
            <input type="text" value={input} onChange={handleInputChange}/>
            <button onClick={handleUpload}>입력</button>
            {names.map((name, index) => {
                return <p key={index}>{name}</p>
            })}
        </div>
    )
}

export default Input;