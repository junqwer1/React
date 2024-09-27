import { CSSProperties } from "react"

export type ChampionCounterImageProps = {
    ChampionCounterImageSrc: string;
}

const ChampionCounterImage = (props: ChampionCounterImageProps) => {

    const ChampionCounterImageStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "9999px"
    }
    
    const ChampionCounterImageAlbumStyle: CSSProperties = {
        width: "32px",
        height: "32px",
        
    }

    return <div style={ChampionCounterImageAlbumStyle}>
        <img style={ChampionCounterImageStyle} src={props.ChampionCounterImageSrc} alt="" />
    </div>
}

export default ChampionCounterImage