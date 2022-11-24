import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./Reducer";
import {useHistory} from "react-router-dom";

function Subtotal() {
    const [{basket},dispatch]= useStateValue();
    const history = useHistory();

    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        총액 ( {basket?.length} Items) : <strong>{value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type="checkbox"/>확인후 이쿠해주세요.
                    </small>
                </>
            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'₩'}
            />

            <button onClick={e=>history.push('/payment')} >결제하기</button>
        </div>
    );
}

export default Subtotal;