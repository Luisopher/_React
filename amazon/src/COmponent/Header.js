import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link, useHistory} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "../firebase";

function Header() {
    const [{basket,user},dispatch]=useStateValue();


    const handleAuthentication =()=>{
        if(user){
            auth.signOut();
        }
    }
    return (<div className='header'>
        <Link to="/">
            <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        </Link>
        <div className='header_search'>
            <input className='header_searchInput' type='text'></input>
            <SearchIcon className='header_searchIcon' style={{
                padding: `5px`,
                height: ` 22px`,
                backgroundColor: `#cd9042`,
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
            }}></SearchIcon>
        </div>
        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLine1'>{user ? user.email :'안녕하세요'}</span>
                <Link to={!user && '/login'} className='header_login'>
                <span onClick={handleAuthentication} className='header_optionLine2'>{user ? '로그아웃':'로그인'}</span>
                </Link>
            </div>

            <div className='header_option'>
                <span className='header_optionLine1'>돌아가기</span>
                <span className='header_optionLine2'>주문내역</span>
            </div>

            <div className='header_option'>
                <span className='header_optionLine1'>반가워요</span>
                <span className='header_optionLine2'>구독과 좋아요</span>
            </div>


            <Link to="/checkout">
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className='header_optionLine2header_basketCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>

        </div>
    </div>);
}

export default Header;