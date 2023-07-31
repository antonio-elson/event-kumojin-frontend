import React from "react";
import { ContentCard, DateCard, DescriptionCard, TitleCard } from "./card-styled";

export interface CardProps {
  name: String;
  description?: String;
  startDate: String;
  endDate: String;
}

export type EventsRequest = CardProps[];

const Card: React.FC<CardProps> = ({ name, description, startDate, endDate }) => {
  return (
    <ContentCard>
      <div>
        <TitleCard>{name}</TitleCard>
        <DescriptionCard>{description}</DescriptionCard>
        <DateCard>{startDate}</DateCard>
        <DateCard>{endDate}</DateCard>
      </div>
    </ContentCard>
  );
};

export default Card;
