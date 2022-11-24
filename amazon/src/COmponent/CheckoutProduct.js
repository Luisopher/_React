import React from "react";
import './CheckoutProduct.css';
import {useStateValue} from "./StateProvider";


function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket},dispatch]= useStateValue();

    const removeFromBasket =()=>{
        dispatch({
            type: 'REMOVE_FRO<_BASKET',
            id:id,

        })
    }
    return (
        <div className='CheckoutProduct'>
            <img className='CheckoutProduct_image' src={image} alt=''/>

            <div className='CheckoutProduct_info'>
                <div className='CheckoutProduct_title'>
                    {title}
                </div>
                <div className='CheckoutProduct_price'>
                    <small>￦</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </div>
                <div className='CheckoutProduct_rating'>
                    {
                        Array(rating).fill().map(()=>(
                            <p>★</p>
                        ))
                    }
                </div>

                <button onClick={removeFromBasket}>장바구니에서 제거하기</button>

            </div>
        </div>


    );
}

export default CheckoutProduct;