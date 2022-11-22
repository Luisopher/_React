import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div>
            <div className='home'>
                <div className='home_container'>
                    <img src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg"
                         className='home_image' alt=""/>

                    <div className='home_row'>
                        {/* 상품 */}
                        <Product
                        id='2324' title={"제품1입니다."}
                        price={23000000}image="https://en.pimg.jp/024/292/158/1/24292158.jpg" rating={4}/>
                        <Product  id='2323' title={"제품2입니다."}
                                  price={2300000} image="https://en.pimg.jp/024/292/158/1/24292158.jpg" rating={4}/>
                    </div>

                    <div className='home_row'>
                        {/* 상품 */}
                        <Product  id='2325' title={"제품3입니다."}
                                  price={423000000} image="https://en.pimg.jp/024/292/158/1/24292158.jpg" rating={4}/>
                        <Product  id='2323' title={"제품4입니다."}
                                  price={123000000} image="https://en.pimg.jp/024/292/158/1/24292158.jpg" rating={4}/>
                        <Product  id='2323' title={"제품5입니다."}
                                  price={23000000} image="https://en.pimg.jp/024/292/158/1/24292158.jpg" rating={4}/>
                    </div>

                    <div className='home_row'>
                        {/* 상품 */}
                        <Product  id='2326' title={"제품6입니다."}
                                  price={43000000} image="https://en.pimg.jp/024/292/158/1/24292158.jpg" rating={4}/>
                        <Product  id='2327' title={"제품7입니다."}
                                  price={63000000} image="https://en.pimg.jp/024/292/158/1/24292158.jpg" rating={4}/>
                        <Product  id='2328' title={"제품8입니다."}
                                  price={73000000} image="https://en.pimg.jp/024/292/158/1/24292158.jpg" rating={4}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;