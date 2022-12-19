import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <div className='header'>
            <div className='left'>
                <div className=' left_logo'></div>
            </div>
            <div className='main'>
                <form action="/">
                    <input type="text"/>
                </form>
            </div>
            <div className='right'>
                <ul className=' right_list'>
                    <li>만들기</li>
                    <li>알림</li>
                    <li>사용자</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;