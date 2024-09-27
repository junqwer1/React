import { CSSProperties } from "react";

export type ChampionImageProps = {
    ChampionImageSrc: string;
}

const ChampionImage = (props: ChampionImageProps) => {

    const ChampionImageStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px"
    }

    const ChampionImageAlbumStyle: CSSProperties = {
        width: "32px",
        height: "32px",
        
    }

    return <div style={ChampionImageAlbumStyle}>
        <img style={ChampionImageStyle} src={props.ChampionImageSrc} alt="" />
    </div>
}

export default ChampionImage;