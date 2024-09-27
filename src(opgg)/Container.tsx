import ChampionCounterImage, { ChampionCounterImageProps } from "./Champion/ChampionCounterImage"
import ChampionImage, { ChampionImageProps } from "./Champion/ChampionImage"
import ChampionName, { ChampionNameProps } from "./Champion/ChampionName"
import Position, { PositionProps } from "./Position/Position"
import PositionBanRate, { PositionBanRateProps } from "./Position/PositionBanRate"
import PositionPickRate, { PositionPickRateProps } from "./Position/PositionPickRate"
import PositionWinRate, { PositionWinRateProps } from "./Position/PositionWinRate"
import Elevation, { ElevationProps } from "./TierAndRank/Elevation"
import Rank, { RankProps } from "./TierAndRank/Rank"
import Tier, { TierProps } from "./TierAndRank/Tier"



export type ContainerProps = 
RankProps &
TierProps &
ElevationProps &
ChampionImageProps &
ChampionNameProps &
ChampionCounterImageProps &
PositionWinRateProps &
PositionPickRateProps &
PositionBanRateProps &
PositionProps;


const Container = (props: ContainerProps) => {
    
    return <article>
            <Rank rank={props.rank} />
            <Elevation rankPrev={props.rankPrev} />
            <ChampionImage ChampionImageSrc={props.ChampionImageSrc} />
            <ChampionName ChapionName={props.ChapionName} />
            <Tier TierSrc={props.TierSrc} />
            <Position PositionSrc={props.PositionSrc} />
            <PositionWinRate PositionWin={props.PositionWin} />
            <PositionPickRate PositionPick={props.PositionPick} />
            <PositionBanRate PositionBan={props.PositionBan} />
            <ChampionCounterImage ChampionCounterImageSrc={props.ChampionCounterImageSrc} />
            <ChampionCounterImage ChampionCounterImageSrc={props.ChampionCounterImageSrc} />
            <ChampionCounterImage ChampionCounterImageSrc={props.ChampionCounterImageSrc} />        
    </article>
}

export default Container