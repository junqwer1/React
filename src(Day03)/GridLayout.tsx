import { CSSProperties, ReactNode } from "react"

type gridtemcol = {
    repeatnum: number;
    component: ReactNode;
}

const GridLayout = (props: gridtemcol) => {

    const gridlayout: CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${props.repeatnum}, 1fr)`,
        gap: "30px"
    }

    return <section style={gridlayout}>{props.component}</section>
}

export default GridLayout