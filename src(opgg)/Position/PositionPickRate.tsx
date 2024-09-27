import { CSSProperties } from "react";

export type PositionPickRateProps = {
    PositionPick: number
}

const PositionPickRate = (props: PositionPickRateProps) => {

    const PositionPickRateStyle: CSSProperties = {
        fontSize: "32px",
        color: "#5C707D",

    }

    return <div style={PositionPickRateStyle}>{props.PositionPick}%</div>
}

export default PositionPickRate;