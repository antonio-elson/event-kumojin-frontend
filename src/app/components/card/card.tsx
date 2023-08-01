import React from "react";
import {
  ContentCard,
  DateCard,
  DescriptionCard,
  TitleCard,
} from "./card-styled";

export interface CardProps {
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
}

export type EventsRequest = CardProps[];

const Card: React.FC<CardProps> = ({
  name,
  description,
  startDate,
  endDate,
}) => {

  return (
    <ContentCard>
      <div>
        <TitleCard>{name}</TitleCard>
        <DescriptionCard>{description}</DescriptionCard>
        <DateCard>{`De: ${startDate}`}</DateCard>
        <DateCard>{`À: ${endDate}`}</DateCard>
      </div>
    </ContentCard>
  );
};

export default Card;
