import { CSSProperties } from "react";
import CategoryList, { CategoryListProps } from "./CategoryList";
import GymName, { GymNamePrpos } from "./GymName";
import StarRate, { StarRateProps } from "./StarRate";
import Reviews, { ReviewsProps } from "./Reviews";
import Address, { AddressProps } from "./Address";
import Album, { AlbumProps } from "./Album";
import Tag, { TagProps } from "./Tag";
import Price, { PriceProps } from "./Price";

export type CardUpperProps = AlbumProps &
  CategoryListProps &
  GymNamePrpos &
  StarRateProps &
  ReviewsProps &
  AddressProps &
  TagProps &
  PriceProps;

const CardUpper = (props: CardUpperProps) => {
  const cardUpperStyle: CSSProperties = {
    display: "flex",
    gap: "10px",
  };

  const rightStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
  };

  const infoStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const eventStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <div style={cardUpperStyle}>
      <Album
        image={
          props.image
        }
      />
      <div style={rightStyle}>
        <div style={infoStyle}>
          <CategoryList categories={props.categories} />
          <GymName gymName={props.gymName} />
          <div>
            <StarRate starRate={props.starRate} />
            <Reviews reviews={props.reviews} />
            <Address address={props.address} />
          </div>
        </div>
        <div style={eventStyle}>
          <Tag text={props.text} />
          <Price price={props.price} />
        </div>
      </div>
    </div>
  );
};

export default CardUpper;
