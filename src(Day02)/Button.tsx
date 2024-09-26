import { CSSProperties } from "react"

type ButtonCSS = {
    backgroundColor: "Primary" | "Hover" | "Deactive"; 
    borderRadius: "Hard" | "Smooth" | "Circle";
    
}

type propsType = ButtonCSS;
const backgroundColorMap = {
    Primary: "#205BF3",
    Hover: "#478DF5",
    Deactive: "#979797"
}

const borderMap = {
    Hard: "0px",
    Smooth: "5px",
    Circle: "9999px"
}

const Button = (props: propsType) => {
    
    const CSSstyle: CSSProperties = {
        backgroundColor: backgroundColorMap[props.backgroundColor],
        borderRadius: borderMap[props.borderRadius],
        color: "white",
        padding: "10px 45px",
        border: "none"
    }
    
    
    return <button style={CSSstyle}>button</button>
}


export default Button;