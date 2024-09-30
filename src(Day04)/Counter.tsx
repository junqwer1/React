import { CSSProperties, useState } from "react";

const Counter = () => {

    const [num, setNum] = useState(0);

    const plus = () => {

        setNum((prev) => {
            
            return prev + 1;
        });
    };

    const minus = () => {
        setNum((prev) => {
            return prev <= 0 ? 0 : prev - 1;
        })
    }


    return <div>
        <button onClick={minus}>-</button>
        <span style={{backgroundColor: num >= 10 ? "red" : "none"}}>{num}</span>
        <button onClick={plus}>+</button>
    </div>
}

export default Counter;