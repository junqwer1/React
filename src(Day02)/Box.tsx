import { CSSProperties } from "react"

// 타입 알리아스!!!
type BoxCSS = {
    // 색상 제약
    backgroundColor: "pink" | "orange" | "skyblue" | "red";
    size: "small" | "medium" | "large";
}

type BoxText = {
    text: string;
    
}

// 함수!!
const Box = (props: BoxCSS & BoxText) => {

    const sizeMap = {
        small:"50px",
        medium:"100px",
        large: "200px"
    }
    // cssProperties
    const boxStyle:CSSProperties = {
        backgroundColor: props.backgroundColor,
        width: sizeMap[props.size],
        height: sizeMap[props.size]
    }



    return <div style={boxStyle}>{props.text}</div>
}

export default Box