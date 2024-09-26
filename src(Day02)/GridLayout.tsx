import { CSSProperties } from "react";
import Button from "./Button";

type GridLayoutProps = {
    repeatNumber: number;
}

const GridLayout = (props: GridLayoutProps) => {
    const gridStyle: CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${props.repeatNumber}, 1fr)`,
        gap: "30px",
        width: "40px"
    }


    return <section style={gridStyle}>
    <Button backgroundColor="Primary" borderRadius="Hard"></Button>
    <Button backgroundColor="Primary" borderRadius="Smooth"></Button>
    <Button backgroundColor="Primary" borderRadius="Circle"></Button>
    <Button backgroundColor="Hover" borderRadius="Hard"></Button>
    <Button backgroundColor="Hover" borderRadius="Smooth"></Button>
    <Button backgroundColor="Hover" borderRadius="Circle"></Button>
    <Button backgroundColor="Deactive" borderRadius="Hard"></Button>
    <Button backgroundColor="Deactive" borderRadius="Smooth"></Button>
    <Button backgroundColor="Deactive" borderRadius="Circle"></Button>
  </section>;

}


export default GridLayout;