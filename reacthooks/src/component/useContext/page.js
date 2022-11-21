import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./content";
import {useContext} from "react";
import {ThemeContext} from "./context/ThemeContext";

const Page = () => {
    //context 사용해 받은 데이터를 받을떄는 useContext를 사용해주면 된다!
    //data 에 createContext를 사용해 받은 값을 넣어준다!
    const data = useContext(ThemeContext);
    //그럼 자식 component에게 일일이 값을 넣어주지 않아도 데이터를 받을수 있다!
    return <div className='page'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
}
export default Page;