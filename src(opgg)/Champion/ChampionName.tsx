import { CSSProperties } from "react"

export type ChampionNameProps = {
    ChapionName: string
}

const ChampionName = (props: ChampionNameProps) => {

    const ChampionNameStyle: CSSProperties ={
        fontSize: "32px",
        fontWeight: "bold",
        color: "#202D37"
    }

    return <div style={ChampionNameStyle}>{props.ChapionName}</div>
}

export default ChampionName;