import { CSSProperties } from "react";
import Circle from "./Circle";

type gridcolnum = {
  repeatnum: number;
};

const Circlegrid = (props: gridcolnum) => {
  const Circledis: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.repeatnum}, 1fr)`,
    gap: "30px",
  };

  const circolor = ["red", "green", "blue", "skyblue", "hotpink"];

  return (
    <section style={Circledis}>
      {circolor.map((v) => (
        <Circle backgroundColor={v} />
      ))}
      {circolor.reverse().map((v) => (
        <Circle backgroundColor={v} />
      ))}
    </section>
  );
};

export default Circlegrid;
