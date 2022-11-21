import React from "react";

const Footer = ({isDark, setIsDark}) => {
    const toggleTheme = () => {
        setIsDark(!setIsDark);
    }
    return <footer className='footer'
                   style={{
                       backgroundColor: isDark ? 'black' : 'lightgrayht',
                   }}>
        <button className='button' onClick={toggleTheme}>Dark mode</button>
    </footer>
}
export default Footer;
