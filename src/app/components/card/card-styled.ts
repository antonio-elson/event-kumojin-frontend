"use client";
import styled from "styled-components";

export const ContentCard = styled.div`
  padding: 12px;
  display: grid;
  border-radius: 8px;
  border-width: 1px;
  border-color: #e5e7eb;
  max-width: 352px;
  min-width: 200px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  width: 100%;
  margin: 5px;
  transition: all 250ms;

  &:hover,
  &:focus {
    box-shadow: rgba(120, 98, 223, 0.3) 0 4px 12px;
  }
`;

export const TitleCard = styled.h5`
  margin: 12px 0;
  font-size: 20px;
  line-height: 2rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: #111827;
`;

export const DescriptionCard = styled.p`
  margin-bottom: 12px;
  font-weight: 400;
  color: #6b7280;
`;

export const DateCard = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
  color: #1153d6;
`;
