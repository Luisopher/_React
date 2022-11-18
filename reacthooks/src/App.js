import './App.css';
import React, {useState} from "react";
import Time from "./component/useState/time";
import Input from "./component/useState/input";
import UseEffectTest from "./component/useEffect/useEffect";
import CleanUp from "./component/useEffect/cleanUp";
import  Ref from "./component/useRef/ref"

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

    </div>);
}

export default App;
