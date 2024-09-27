import { CSSProperties } from "react";

export type ElevationProps = {
    rankPrev: number;
}

const Elevation = (props: ElevationProps) => {

    const ElevationStyle: CSSProperties = {
        
        fontSize: "24px",
        color: "#509335",
    }

    return <div style={ElevationStyle}>{props.rankPrev}</div>
}

export default Elevation;