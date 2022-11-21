import React from "react";

const Content = ({isDark}) => {
    return <div className='content'
                style={{
                    backgroundColor: isDark ? 'black' : 'white',
                    color: isDark ? 'white' : 'black'
                }}>
        <h1>홍길동님 안녕하세요!</h1>
    </div>
}
export default Content;
