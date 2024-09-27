import { CSSProperties } from "react"

export type PositionProps = {
    PositionSrc: string;
}

const Position = (props: PositionProps) => {
    
    const PositionAlbumStyle: CSSProperties = {
        width: "32px",
        height: "32px",
        
    }
    
    const PositionStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
    return <div style={PositionAlbumStyle}>
        <img style={PositionStyle} src={props.PositionSrc} alt="" />
    </div>
}

export default Position;