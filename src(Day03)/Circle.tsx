import { CSSProperties } from "react";
type Circleprops = {
  backgroundColor: string;
};

const Circle = (props: Circleprops) => {
  const ccStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    borderRadius: "9999px",
    width: "100px",
    height: "100px",
    border: "none",
  };

  return <button style={ccStyle}></button>;
};
export default Circle;
