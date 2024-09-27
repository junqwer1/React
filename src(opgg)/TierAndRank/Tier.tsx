import { CSSProperties } from "react"

export type TierProps = {
    TierSrc: any
}

const Tier = (props: TierProps) => {

    
    const TierStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }

    const TierAlbumStyle: CSSProperties = {
        width: "32px",
        height: "32px",
        
    }

    return <div style={TierAlbumStyle}>
        <img style={TierStyle} src={props.TierSrc} alt="" />
    </div>
}

export default Tier