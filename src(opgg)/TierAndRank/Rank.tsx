import { CSSProperties } from "react"

export type RankProps = {
    rank: number
}

const Rank = (props: RankProps) => {


    const RankCss: CSSProperties = {
        fontSize: "24px",
        color: "#C4ADAF",
    }

    return <div style={RankCss}>{props.rank}</div>
}

export default Rank