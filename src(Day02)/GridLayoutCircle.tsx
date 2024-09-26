import { CSSProperties } from "react"
import Circle from "./Circle"

const GridLayoutCircle = () => {
    const gridStyle: CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(5, 1fr)`,
        gap: "30px",
    }


    return <section style={gridStyle}>
        {[
            "red",
            "blue",
            "green",
            "pink",
            "grey",
            "skyblue",
            "indigo",
            "purple",
            "orange"
        ].map((v) => (
            <Circle backgroudColor={v} />
        ))}
    </section>
}

export default GridLayoutCircle;