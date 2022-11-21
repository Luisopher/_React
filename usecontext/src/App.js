import './App.css';
import Page from "./useContext/page";
import React, {useState} from "react";

function App() {
  const [isDark, setIsDark] =useState(false);
  return <div>
    <Page isDark={isDark} setIsDark={setIsDark}/>
  </div>

  ;
}

export default App;
