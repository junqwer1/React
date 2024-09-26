import { CSSProperties } from "react";

type ButProps = {
  ButBackColor: "Primary" | "Hover" | "Deactive";
  ButRad: "Circle" | "Smooth" | "Hard";
};

const Button = (props: ButProps) => {
  const ButColor = {
    Primary: "red",
    Hover: "blue",
    Deactive: "green",
  };
  const ButRadi = {
    Circle: "9999px",
    Smooth: "20px",
    Hard: "0px",
  };

  const ButStyle: CSSProperties = {
    backgroundColor: ButColor[props.ButBackColor],
    borderRadius: ButRadi[props.ButRad],
    fontSize: "32px",
    border: "none",
    padding: "10px 40px",
  };
  return <button style={ButStyle}>button</button>;
};

export default Button;
