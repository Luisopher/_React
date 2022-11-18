import './App.css';
import React, {useState} from "react";
import Time from "./component/useState/time";
import Input from "./component/useState/input";
import UseEffectTest from "./component/useEffect/useEffect";
import CleanUp from "./component/useEffect/cleanUp";
import  Ref from "./component/useRef/ref"
import  Ref_1 from "./component/useRef/Ref_1"
import Ref_2 from "./component/useRef/Ref_2";

function App() {

    return (<div>
        <Time></Time>
        <Input></Input>
        <hr/>
        <UseEffectTest></UseEffectTest>
        <hr/>
        <CleanUp></CleanUp>
        <hr/>
        <Ref></Ref>
        <Ref_1></Ref_1>
        <hr/>
        <Ref_2></Ref_2>

    </div>);
}

export default App;
