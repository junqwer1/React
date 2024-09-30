import { useState } from "react";

const Up = () => {

    const [zero, setZero] = useState(0);

    const add = () => {
        setZero((prev) => {
            return prev+1
        })
    }

    return <button onClick={add}>{zero}</button>
}

export default Up;