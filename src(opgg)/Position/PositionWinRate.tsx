import { CSSProperties } from "react";

export type PositionWinRateProps = {
    PositionWin: number
}

const PositionWinRate = (props: PositionWinRateProps) => {

    const PositionWinRateStyle: CSSProperties = {
        fontSize: "32px",
        color: "#5C707D",

    }

    return <div style={PositionWinRateStyle}>{props.PositionWin}%</div>
}

export default PositionWinRate;