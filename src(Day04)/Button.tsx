import { useState } from "react";

const Button = () => {
    const [food, setFood] = useState("탕후루");

    const abc = () => {
        setFood((prev) => {
            return prev+"후루 사주세요";
        })
    }
    

    return  <button onClick={abc}>{food}</button>
}

export default Button;