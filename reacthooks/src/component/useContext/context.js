import React from "react";
import {useState} from "react";
import Page from "./page";
import {ThemeContext} from "./context/ThemeContext";

const Context = () => {
    const [isDark, setIsDark] = useState(false);

    return <ThemeContext.Provider value={{isDark,setIsDark}}>
        <Page />
    </ThemeContext.Provider>

}
export default Context;