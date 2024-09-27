import { CSSProperties } from "react";

export type GymNamePrpos = {
    gymName: string;
}


const GymName = (props: GymNamePrpos) => {

    const gymNameStyle: CSSProperties = {
        fontWeight: "bold",
        lineHeight: "26px"
        
    }

    return <span style={gymNameStyle}>{props.gymName}</span>
}

export default GymName