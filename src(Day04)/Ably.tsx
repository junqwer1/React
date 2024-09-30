import { useState } from "react";
import AblyCounter from "./AblyCounter";
import AblyCounter2 from "./AblyCounter2";

const Ably = () => {
    const [num, setNum] = useState(2);

    return <div style={{display: "flex", flexDirection: "column", gap: "5px", width:"600px", justifyContent: "center", alignContent: "center", padding: "10px", border:"1px solid grey"}}>
        <AblyCounter name="아이보리" price={15500} />
        <AblyCounter2 name="보리" price={15000} />
        <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between",}}>
            <span>총 {}개</span>
            <span>{}원</span>
        </div>
    </div>
}

export default Ably;