import React, {useContext} from "react";
import {ThemeContext} from "./context/ThemeContext";

const Header = () => {
    const {isDark}=useContext(ThemeContext);
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