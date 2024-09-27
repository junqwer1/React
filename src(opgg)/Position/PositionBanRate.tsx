import { CSSProperties } from "react";

export type PositionBanRateProps = {
    PositionBan: number
}

const PositionBanRate = (props: PositionBanRateProps) => {

    const PositionBanRateStyle: CSSProperties = {
        fontSize: "32px",
        color: "#5C707D",

    }

    return <div style={PositionBanRateStyle}>{props.PositionBan}%</div>
}

export default PositionBanRate;