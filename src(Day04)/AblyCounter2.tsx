import { CSSProperties, useState } from "react"

type AblyCounterProps2 = {
    name: string;
    price: number;
}

const AblyCounter2 = (props: AblyCounterProps2) => {

    const buttonStyle: CSSProperties = {
        width: "30px",
        height: "30px",
        borderRadius: "9999px",
        color: "grey",
        fontSize: "15px",
        fontWeight: "bold",
        backgroundColor: "white",
        border: "1px solid grey",
    }

    const [num, setNum] = useState(1);

    const plus = () => {

        setNum((prev) => {
            
            return prev + 1;
        });
    };

    const minus = () => {
        setNum((prev) => {
            return prev <= 1 ? 1 : prev - 1;
        })
    } 


    return <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "20px",  border: "1px solid grey"}}>
        <div>
            <button style={buttonStyle} onClick={minus}>-</button>
            <span style={{color: "black", fontSize: "15px", fontWeight: "bold", padding: "10px"}}>{num}</span>
            <button style={buttonStyle} onClick={plus}>+</button>
        </div>
        <span>{props.name}</span>
        <div>
            <span>{String(props.price * num)}원</span>
        </div>
    </div>
}

export default AblyCounter2