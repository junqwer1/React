import { CSSProperties } from "react"

// 타입 알리아스!!!
type propsType = {
    // 색상 제약
    backgroundColor: "red" | "blue" | "green" | "orange";

    width: string;
    height: string;
    text: string;
}

// 함수!!
const Box = (props: propsType) => {

    // cssProperties
    const bgcolor: CSSProperties = {
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.height,
    }



    return <div style={bgcolor}>{props.text}</div>
}

export default Box