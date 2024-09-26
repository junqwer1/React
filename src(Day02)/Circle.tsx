import { CSSProperties } from "react"

type backcolorMap = {
    backgroudColor: string;
}

 const Circle = (props: backcolorMap) => {
    const CircleCSS: CSSProperties = {
        borderRadius: "9999px",
        width: "100px",
        height: "100px",
        backgroundColor: props.backgroudColor 
    }





    return <div style={CircleCSS}></div>
 }

 export default Circle 