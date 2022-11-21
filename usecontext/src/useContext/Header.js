import React from "react";

const Header = ({isDark}) => {
    return <div>
        <header className='header'
                style={{
                    //true면 black false면 lightgray
                    backgroundColor: isDark ? 'black' : 'lightgray',
                    //true면 white false면 black
                    color: isDark ? 'white' : 'black',
                }}>
            <h1>Welcome 홍길동!</h1>
        </header>
    </div>
}
export default Header;