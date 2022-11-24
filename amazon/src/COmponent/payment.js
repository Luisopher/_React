
import React from 'react';
import  './payment.css';
import {useStateValue} from "./StateProvider";
import {Link} from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";

function Payment() {
    const [{basket,user},dispatch] = useStateValue();


    return (
        <div className='payment'>
            <div className='payment_container' >
                <Link to = '/checkout' className='checkoutLink'>
                    <h1  className='checkoutLink'>장바구니로 돌아가기 </h1>
                </Link>
                <h1 className='productCnt'>({basket.length}개의 상품이 존재합니다.)</h1>
            </div>
             
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>배송지 설정</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}님의 주소</p>
                    <p>강원도</p>
                    <p>철원</p>
                </div>
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>상품 목록</h3>
                </div>
                <div className='payment_item'>
                    {basket.map((item)=>(
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                    ))}
                </div>
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>결제</h3>
                </div>
                <div className='payment_details'>

                </div>
            </div>


        </div>
    );
}

export default Payment;