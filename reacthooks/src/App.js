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
import Usememo1 from "./component/useMemo/usememo1";
import Usememo2 from "./component/useMemo/usememo2";
import Usecallback1 from "./component/useCallback/usecallback1";
import Usecallback2 from "./component/useCallback/usecallback2";

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
        <h1>useContext</h1>
        <Context/>
        <hr/>
        <h1>useMemo</h1>
        <Usememo1></Usememo1>
        <Usememo2></Usememo2>
        <hr/>
        <br/>
        <br/><br/><br/>


        <h1>useCallback</h1>
        <Usecallback1></Usecallback1>
        <Usecallback2></Usecallback2>
    </div>);
}

export default App;
