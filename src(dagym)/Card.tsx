import { CSSProperties, ReactNode } from "react";
import CardUpper, { CardUpperProps } from "./CardUpper";
import CardDown from "./CardDown";

type CardProps = CardUpperProps;


const Card = (props: CardProps) => {
    const CardStyle: CSSProperties = {
        display: "flex",
        padding: "10px",
        flexDirection: "column",
        gap: "10px"
    }

    return <article style={CardStyle}>
        <CardUpper {...props} />
        <CardDown />
    </article>
}

export default Card;