import './App.css';
import React from "react";
import Time from "./component/useState/time";
import Input from "./component/useState/input";
import UseEffectTest from "./component/useEffect/useEffect";
import CleanUp from "./component/useEffect/cleanUp";
import Ref from "./component/useRef/ref"
import Ref1 from "./component/useRef/Ref1"
import Ref2 from "./component/useRef/Ref2";
import Context from "./component/useContext/context";

function App() {

    return (<div>
        <h1>useState</h1>
        <Time></Time>
        <Input></Input>
        <hr/>
        <h1>useEffect</h1>
        <UseEffectTest></UseEffectTest>
        <hr/>
        <CleanUp></CleanUp>
        <hr/>
        <h1>useRef</h1>
        <Ref></Ref>
        <Ref1></Ref1>
        <hr/>
        <Ref2></Ref2>
        <hr/>
        <Context/>

    </div>);
}

export default App;
