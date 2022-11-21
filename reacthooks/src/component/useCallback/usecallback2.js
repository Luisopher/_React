import React, { useCallback, useState } from "react";
import Box from "./box";

const Usecallback2 = () => {
    // size의 초기값을 100으로 선언
    const [size, setSize] = useState(100);
    // isDark의 기본값을 false로 선언!
    const [isDark, setIsDark] = useState(false);


    //useCallback을 사용해 size값이 바뀔때 resizing함수가 작동하도록 설계!
    const resizing = useCallback(() => {
        return {
            // return값으로 size의 값을 받아온다!
            backgroundColor: "pink",
            width: `${size}px`,
            height: `${size}px`,
        };
    }, [size]);

    return (
        <div
            style={{
                // isDark의 값을 받아와 true,false 판별후 값을 출력
                backgroundColor: isDark ? "black" : "white",
            }}
        >
            <input
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
            />
            {/* dark mode를 위한 toggle 버튼 생성! */}
            <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
            {/* Box component! */}
            <Box resizing={resizing} />
        </div>
    );
};

export default Usecallback2;
