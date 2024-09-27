import ChampionCounterImage from "./Champion/ChampionCounterImage";
import ChampionImage from "./Champion/ChampionImage";
import ChampionName from "./Champion/ChampionName";
import Container from "./Container";
import { championRankingList } from "./Data";
import Position from "./Position/Position";
import PositionBanRate from "./Position/PositionBanRate";
import PositionPickRate from "./Position/PositionPickRate";
import PositionWinRate from "./Position/PositionWinRate";
import Elevation from "./TierAndRank/Elevation";
import Rank from "./TierAndRank/Rank";
import Tier from "./TierAndRank/Tier";



const ContainerLayout = () => {


    return <section style={{display: "flex", flexDirection: "row"}}>
            <section>
            { championRankingList.map((v,i) => {
                return <Container 
                rank={v.positionTierData.rank}
                rankPrev={v.positionTierData.rank_prev}
                ChampionImageSrc={v.image_url}
                ChapionName={v.name}
                TierSrc={v.positionTierData.tier}
                PositionSrc={v.positionName}
                PositionWin={v.positionWinRate * 100}
                PositionPick={v.positionPickRate * 100}
                PositionBan={v.positionBanRate * 100}
                ChampionCounterImageSrc={v.positionCounters[i].img_url}
                />
            })}
            </section>
        </section>

}

export default ContainerLayout;