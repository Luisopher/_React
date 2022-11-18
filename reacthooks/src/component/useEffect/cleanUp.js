    import React, {useState} from "react";
    import Timer from "./timer";

    const CleanUP=()=>{
        const [showTimer, setShowTimer]=useState(false);

        return <div>
            {showTimer && <Timer/>}
            <button onClick={()=>{
                setShowTimer(!showTimer)}
            } >toggle timer</button>
        </div>
    }
    export default CleanUP;