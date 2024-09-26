import { CSSProperties } from "react";
import Button from "./Button";
type Buttongridprops = {
  repeat: number;
};

const Buttongrid = (props: Buttongridprops) => {
  const Buttongridstyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `${props.repeat},1fr`,
    gap: "30px",
  };
  return (
    <section style={Buttongridstyle}>
      <Button ButBackColor="Hover" ButRad="Circle"></Button>
      <Button ButBackColor="Hover" ButRad="Circle"></Button>
      <Button ButBackColor="Hover" ButRad="Circle"></Button>
      <Button ButBackColor="Primary" ButRad="Hard"></Button>
      <Button ButBackColor="Primary" ButRad="Hard"></Button>
      <Button ButBackColor="Primary" ButRad="Hard"></Button>
      <Button ButBackColor="Deactive" ButRad="Smooth"></Button>
      <Button ButBackColor="Deactive" ButRad="Smooth"></Button>
      <Button ButBackColor="Deactive" ButRad="Smooth"></Button>
    </section>
  );
};
export default Buttongrid;
